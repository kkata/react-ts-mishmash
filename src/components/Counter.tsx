import { useSelector, useDispatch } from "react-redux";
import { CounterState, CounterVisibleState } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: CounterState) => state.value);
  const show = useSelector((state: CounterVisibleState) => state.isVisible);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleIncrease = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const handleToggle = () => {
    dispatch({ type: "toggle" });
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
