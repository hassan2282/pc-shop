import { tokenManager } from './apiClient';

export const logoutAction = () => {
  // Use tokenManager to clear all tokens consistently
  tokenManager.clearTokens();
  
  return {
    type: 'LOGOUT',
    payload: null
  }
}