import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import viewReducer from './reducers/viewSlice';

export const store = configureStore({
  reducer: {
    view: viewReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
