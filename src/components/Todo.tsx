import { TodoType } from "../App";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
} & { todo: TodoType };

const Todo = ({ todo, setTodos }: Props) => {
  const deleteHandler = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== todo.id;
      });
    });
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
