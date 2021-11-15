import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/index";
import { counterActions } from "../store/counterSlice";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const show = useAppSelector((state) => state.counter.isVisible);
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
  };
  const handleToggle = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div>
      <h1>Counter</h1>
      {show && <p>{counter}</p>}
      <button onClick={handleIncrement} type="button">
        increment
      </button>
      <button onClick={handleIncrease} type="button">
        increase by 5
      </button>
      <button onClick={handleDecrement} type="button">
        decrement
      </button>
      <button onClick={handleToggle} type="button">
        toggle
      </button>
    </div>
  );
};

export default Counter;
