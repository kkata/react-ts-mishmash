import { createStore, AnyAction } from "redux";

export type CounterState = {
  value: number;
};

export type CounterVisibleState = {
  isVisible: boolean;
};

const initialState: CounterState & CounterVisibleState = {
  value: 0,
  isVisible: true,
};

const counterReducer = (state = initialState, action: AnyAction) => {
  if (action.type === "increment") {
    return {
      value: state.value + 1,
      isVisible: state.isVisible,
    };
  }
  if (action.type === "increase") {
    return {
      value: state.value + action.amount,
      isVisible: state.isVisible,
    };
  }
  if (action.type === "decrement") {
    return {
      value: state.value - 1,
      isVisible: state.isVisible,
    };
  }
  if (action.type === "toggle") {
    return {
      value: state.value,
      isVisible: !state.isVisible,
    };
  }

  return state;
};

export const store = createStore(counterReducer);
