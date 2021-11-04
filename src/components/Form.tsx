import { useRef } from "react";

import { TodoType } from "../App";

type Props = {
  handleAddTodo: (newTodo: TodoType) => void;
  setStatus: (status: string) => void;
};

const Form = ({ handleAddTodo, setStatus }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random() * 1000,
      text: inputRef.current!.value,
      completed: false,
    };
    handleAddTodo(newTodo);

    inputRef.current!.value = "";
  };
  const statusHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input ref={inputRef} type="text" className="todo-input" />
      <button className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
