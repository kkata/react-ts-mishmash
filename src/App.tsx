import { useState } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store/index";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import "./App.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  created: Date;
  updated?: Date;
};

export const todoStatus = ["all", "completed", "uncompleted"] as const;
export type TodoStatusType = typeof todoStatus[number];

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const App = () => {
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

  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      Hello Todos🍬
      <Form handleAddTodo={handleAddTodo} handleStatus={handleStatus} />
      <TodoList
        todos={todos}
        status={status}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <Counter />
    </div>
  );
};

export default App;
