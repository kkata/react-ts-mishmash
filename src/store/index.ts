import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, todo: todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
