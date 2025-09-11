export const logoutAction = () => {
  localStorage.removeItem('token');
  
  return {
    type: 'LOGOUT',
    payload: null
  }
}