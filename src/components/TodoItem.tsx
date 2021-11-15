import { useState } from "react";
import { TodoType } from "./Todo";

type Props = {
  handleDeleteTodo: (todoId: number) => void;
  handleCompleteTodo: (todoId: number) => void;
  handleEditTodo: (todoId: number, todoText: string) => void;
} & { todo: TodoType };

const Todo = ({
  todo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleEditTodo,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteHandler = () => {
    handleDeleteTodo(todo.id);
  };
  const completeHandler = () => {
    handleCompleteTodo(todo.id);
  };

  const editHandler = (event: React.FormEvent<HTMLInputElement>) => {
    handleEditTodo(todo.id, event.currentTarget.value);
  };

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={todo.text}
          onChange={editHandler}
          onBlur={editingHandler}
          autoFocus
        />
      ) : (
        <p onClick={editingHandler}>
          {todo.completed ? <del>{todo.text}</del> : todo.text}
        </p>
      )}
      {!isEditing && (
        <button onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
      )}

      <button onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
      <p>created: {todo.created.toISOString()}</p>
      {todo.updated && <p>updated: {todo.updated.toISOString()}</p>}
    </li>
  );
};

export default Todo;
