import React from "react";
import { TodoType } from "../App";

type Props = {
  handleDeleteTodo: (todoId: number) => void;
  handleCompleteTodo: (todoId: number) => void;
} & { todo: TodoType };

const Todo = ({ todo, handleDeleteTodo, handleCompleteTodo }: Props) => {
  const deleteHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleDeleteTodo(todo.id);
  };
  const completeHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleCompleteTodo(todo.id);
  };

  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
