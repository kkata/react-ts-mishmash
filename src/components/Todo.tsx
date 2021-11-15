import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  created: Date;
  updated?: Date;
};

export const todoStatus = ["all", "completed", "uncompleted"] as const;
export type TodoStatusType = typeof todoStatus[number];

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [status, setStatus] = useState<string>("all");

  const handleAddTodo = (newTodo: TodoType) => {
    setTodos((prevTodos): TodoType[] => {
      return [newTodo, ...prevTodos];
    });
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== todoId;
      });
    });
  };

  const handleCompleteTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((item) => {
        return item.id === todoId
          ? {
              ...item,
              completed: !item.completed,
              updated: new Date(),
            }
          : item;
      });
    });
  };

  const handleEditTodo = (todoId: number, todoText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((item) => {
        return item.id === todoId
          ? { ...item, text: todoText, updated: new Date() }
          : item;
      });
    });
  };

  const handleStatus = (status: TodoStatusType) => {
    setStatus(status);
  };
  return (
    <>
      <h1>Hello Todos🍬</h1>
      <TodoForm handleAddTodo={handleAddTodo} handleStatus={handleStatus} />
      <TodoList
        todos={todos}
        status={status}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
};

export default Todo;
