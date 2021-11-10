import { createStore, AnyAction } from "redux";

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: AnyAction) => {
  if (action.type === "increment") {
    return {
      value: state.value + 1,
    };
  }
  if (action.type === "increase") {
    return {
      value: state.value + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      value: state.value - 1,
    };
  }
  return state;
};

export const store = createStore(counterReducer);
