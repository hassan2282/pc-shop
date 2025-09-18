import axios from 'axios';
import { logoutAction } from './Actions';
import store from './store';

// ✅ اول apiClient رو بساز
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // آدرس پایه API
  timeout: 10000, // زمان انتظار
});

// 🔍 Interceptor برای درخواست‌ها (افزودن هدر Authorization)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ⚠️ Interceptor برای پاسخ‌ها (مدیریت خطاهای 401 و رفرش توکن)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await apiClient.post("refresh");
        const newToken = res.data.authorisation.token;
        localStorage.setItem("token", newToken);
        apiClient.defaults.headers.Authorization = `Bearer ${newToken}`;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest); // تکرار درخواست اصلی
      } catch (err) {
        store.dispatch(logoutAction());
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
