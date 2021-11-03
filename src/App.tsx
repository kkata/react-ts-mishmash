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

  const handleTodos = (type: string, todos: TodoType[], todo: TodoType) => {
    switch (type) {
      case "add":
        setTodos([...todos, todo]);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      Hello Todos🍬
      <Form todos={todos} setStatus={setStatus} handleTodos={handleTodos} />
      <TodoList todos={todos} setTodos={setTodos} status={status} />
    </div>
  );
};

export default App;
