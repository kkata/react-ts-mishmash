import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

type CounterVisibleState = {
  isVisible: boolean;
};

type AuthenticatedState = {
  isAuthenticated: boolean;
};

const initialCounterState: CounterState & CounterVisibleState = {
  value: 0,
  isVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    toggleCounter(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const initialAuthState: AuthenticatedState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
