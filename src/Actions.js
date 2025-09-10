export const logoutAction = () => {
  // پاک کردن storage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  return {
    type: "logout",
  };
};