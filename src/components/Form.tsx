import { useRef } from "react";

import { TodoType } from "../App";

type Props = {
  todos: TodoType[];
  handleTodos: (type: string, todos: TodoType[], todo: TodoType) => void;
  setStatus: (status: string) => void;
};

const Form = ({ todos, handleTodos, setStatus }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitTodoHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleTodos("add", todos, {
      id: Math.random() * 1000,
      text: inputRef.current!.value,
      completed: false,
    });

    inputRef.current!.value = "";
  };
  const statusHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <form>
      <input ref={inputRef} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
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
