import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

type CounterVisibleState = {
  isVisible: boolean;
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
