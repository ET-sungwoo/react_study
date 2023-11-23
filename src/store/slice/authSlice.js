import { createSlice } from '@reduxjs/toolkit';
import { getUserInfoToLocalStorage } from '../../utils/auth/useInfo.js';

const initialState = {
  id: null,
  username: null,
  isLogin: false,
};

export const { reducer: authReducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginCheck(state) {
      const userInfo = getUserInfoToLocalStorage();
      if (userInfo) {
        state.isLogin = true;
        state.id = userInfo.id;
        state.username = userInfo.username;
      }
    },

    setUserInfo(state, { payload }) {
      state.username = payload.username;
      state.isLogin = true;
    },
  },
});

export const { loginCheck, setUserInfo } = actions;

export default authReducer;
