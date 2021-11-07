import Todo from "./Todo";

import { TodoType } from "../App";

type Props = {
  todos: TodoType[];
  handleDeleteTodo: (todoId: number) => void;
  handleCompleteTodo: (todoId: number) => void;
  handleEditTodo: (todoId: number, todoText: string) => void;
  status: string;
};

const TodoList = ({
  todos,
  status,
  handleDeleteTodo,
  handleCompleteTodo,
  handleEditTodo,
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
    <div>
      <ul>
        {filteredTodo.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
