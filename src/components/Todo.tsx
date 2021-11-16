import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/index";
import { todoActions } from "../store/todoSlice";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { TodoType, TodoStatusType } from "../store/todoSlice";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Todo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const status = useAppSelector((state) => state.todo.status);

  const handleAddTodo = (newTodo: TodoType) => {
    dispatch(todoActions.add(newTodo));
  };

  const handleDeleteTodo = (todoId: number) => {
    dispatch(todoActions.delete(todoId));
  };

  const handleCompleteTodo = (todoId: number) => {
    dispatch(todoActions.complete(todoId));
  };

  const handleEditTodo = (todoId: number, todoText: string) => {
    dispatch(todoActions.edit({ id: todoId, text: todoText }));
  };

  const handleStatus = (status: TodoStatusType) => {
    dispatch(todoActions.filtered(status));
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
