import { useSelector, useDispatch } from "react-redux";
import { CounterState } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: CounterState) => state.value);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={handleIncrement} type="button">
        increment
      </button>
      <button onClick={handleDecrement} type="button">
        decrement
      </button>
    </div>
  );
};

export default Counter;
