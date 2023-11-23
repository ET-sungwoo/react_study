import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

export const { reducer: authReducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state) {
      state.isLogin = true;
    },
  },
});

export const { setIsLogin } = actions;

export default authReducer;
