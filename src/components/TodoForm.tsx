import { useRef } from "react";

import { todoStatus, TodoStatusType } from "../store/todoSlice";

import { TodoType } from "../store/todoSlice";

type Props = {
  handleAddTodo: (newTodo: TodoType) => void;
  handleStatus: (status: TodoStatusType) => void;
};

const Form = ({ handleAddTodo, handleStatus }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random() * 1000,
      text: inputRef.current!.value,
      completed: false,
      created: new Date().toISOString(),
    };
    handleAddTodo(newTodo);

    inputRef.current!.value = "";
  };

  const statusHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.currentTarget.value as TodoStatusType;
    handleStatus(target);
  };

  const options = todoStatus.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <form onSubmit={submitTodoHandler}>
      <input ref={inputRef} type="text" />
      <button>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler}>{options}</select>
      </div>
    </form>
  );
};

export default Form;
