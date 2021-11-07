import { useState } from "react";
import { TodoType } from "../App";

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
  const [isReadOnly, setIsReadOnly] = useState(true);

  const deleteHandler = () => {
    handleDeleteTodo(todo.id);
  };
  const completeHandler = () => {
    handleCompleteTodo(todo.id);
  };

  const editHandler = (event: React.FormEvent<HTMLInputElement>) => {
    handleEditTodo(todo.id, event.currentTarget.value);
  };

  const readOnlyHandler = () => {
    setIsReadOnly(!isReadOnly);
  };

  return (
    <li>
      <p>
        <input
          type="text"
          value={todo.text}
          onChange={editHandler}
          onFocus={readOnlyHandler}
          onBlur={readOnlyHandler}
          readOnly={isReadOnly}
        />
      </p>
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
