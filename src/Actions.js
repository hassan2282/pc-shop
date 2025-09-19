export const logoutAction = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  return {
    type: 'LOGOUT',
    payload: null
  }
}