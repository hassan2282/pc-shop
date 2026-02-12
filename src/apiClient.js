import axios from 'axios';
import { logoutAction } from './Actions';
import store from './store';

// Token storage keys
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const TOKEN_EXPIRY_KEY = 'token_expiry';

// Track ongoing refresh to prevent race conditions
let isRefreshing = false;
let refreshSubscribers = [];

// Add subscriber to queue for pending refresh
const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

// Notify all subscribers that token is refreshed
const onTokenRefreshed = (newToken) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

// Clear all subscribers on refresh failure
const onRefreshFailed = () => {
  refreshSubscribers = [];
};

// Store tokens with expiry time
const storeTokens = (accessToken, refreshToken, expiresIn) => {
  const expiryTime = Date.now() + (expiresIn * 1000); // Convert to milliseconds
  localStorage.setItem(TOKEN_KEY, accessToken);
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
};

// Get stored tokens
const getStoredTokens = () => {
  return {
    accessToken: localStorage.getItem(TOKEN_KEY),
    refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
    expiryTime: parseInt(localStorage.getItem(TOKEN_EXPIRY_KEY) || '0'),
  };
};

// Clear all tokens
const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
};

// Check if token is expired or will expire soon (within 5 minutes)
const isTokenExpired = () => {
  const { expiryTime } = getStoredTokens();
  if (!expiryTime) return true;
  // Consider token expired if it will expire within 5 minutes (300000 ms)
  return Date.now() >= (expiryTime - 300000);
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

const refreshClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Refresh access token
const refreshAccessToken = async () => {
  const { refreshToken } = getStoredTokens();
  
  try {
    const response = await refreshClient.post("auth/refresh", {
      refresh_token: refreshToken
    });
    
    const { access_token, refresh_token: newRefreshToken, expires_in } = response.data;
    
    // Store new tokens
    storeTokens(
      access_token,
      newRefreshToken || refreshToken, // Use new refresh token if provided, otherwise keep old one
      expires_in || 20160 // Default to 1 hour if not provided
    );
    
    // Update default headers
    apiClient.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    
    console.log('Token refreshed successfully');
    return access_token;
  } catch (error) {
    console.error('Token refresh failed:', error.response?.data || error.message);
    clearTokens();
    store.dispatch(logoutAction());
    throw error;
  }
};

// Request interceptor - add token to headers
apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken } = getStoredTokens();
    
    // Check if token needs refresh before making request
    if (accessToken && isTokenExpired() && !config._skipRefresh) {
      try {
        const newToken = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${newToken}`;
      } catch (error) {
        // If refresh fails, continue with original token (will likely fail with 401)
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
    } else if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle 401 errors and token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 errors (except for refresh endpoint itself)
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "auth/refresh"
    ) {
      originalRequest._retry = true;
      
      if (isRefreshing) {
        // If already refreshing, add request to queue
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(apiClient(originalRequest));
          });
        }).catch((err) => {
          onRefreshFailed();
          return Promise.reject(err);
        });
      }
      
      isRefreshing = true;
      
      try {
        const newToken = await refreshAccessToken();
        
        // Notify all waiting requests
        onTokenRefreshed(newToken);
        
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (err) {
        onRefreshFailed();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    
    return Promise.reject(error);
  }
);

// Export helper functions for use in other parts of the app
export const tokenManager = {
  storeTokens,
  getStoredTokens,
  clearTokens,
  isTokenExpired,
  refreshAccessToken,
};

export default apiClient;
