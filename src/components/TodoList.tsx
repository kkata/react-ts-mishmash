import Todo from "./Todo";

import { TodoType } from "../App";

type Props = {
  todos: TodoType[];
  handleDeleteTodo: (todoId: number) => void;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  status: string;
};

const TodoList = ({ todos, setTodos, status, handleDeleteTodo }: Props) => {
  const filteredTodo = todos.filter((todo) => {
    switch (status) {
      case "completed":
        return todo.completed;
      case "uncompleted":
        return !todo.completed;
      default:
        return todo;
    }
  });

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
