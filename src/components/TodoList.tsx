import Todo from "./Todo";

import { TodoType } from "../App";

type Props = {
  todos: TodoType[];
  handleDeleteTodo: (todoId: number) => void;
  handleCompleteTodo: (todoId: number) => void;
  status: string;
};

const TodoList = ({
  todos,
  status,
  handleDeleteTodo,
  handleCompleteTodo,
}: Props) => {
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
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
