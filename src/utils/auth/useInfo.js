export const getUserInfoToLocalStorage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo;
};

export const saveUserInfoToLocalStorage = (user) => {
  localStorage.setItem('userInfo', JSON.stringify(user));
};
