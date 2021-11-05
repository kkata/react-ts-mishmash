import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [status, setStatus] = useState("all");

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
            }
          : item;
      });
    });
  };

  return (
    <div className="App">
      Hello Todos🍬
      <Form setStatus={setStatus} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        status={status}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default App;
