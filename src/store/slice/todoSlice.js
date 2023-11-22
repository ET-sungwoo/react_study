import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const { reducer: todoReducer, actions } = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, { payload }) {
      state.todos.push(payload);
    },
  },
});

export const { setTodo } = actions;

export default todoReducer;
