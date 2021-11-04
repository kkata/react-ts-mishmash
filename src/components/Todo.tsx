import React from "react";
import { TodoType } from "../App";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleDeleteTodo: (todoId: number) => void;
} & { todo: TodoType };

const Todo = ({ todo, setTodos, handleDeleteTodo }: Props) => {
  const deleteHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleDeleteTodo(todo.id);
  };
  const completeHandler = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((item) => {
        return item.id === todo.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item;
      });
    });
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
