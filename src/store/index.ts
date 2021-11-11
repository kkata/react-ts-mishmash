import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

type CounterVisibleState = {
  isVisible: boolean;
};

const initialState: CounterState & CounterVisibleState = {
  value: 0,
  isVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
