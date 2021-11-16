import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  created: string;
  updated?: string;
};

export const todoStatus = ["all", "completed", "uncompleted"] as const;
export type TodoStatusType = typeof todoStatus[number];

type todoState = { status: TodoStatusType; todos: TodoType[] };

const todoInitialState: todoState = { status: "all", todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    add(state, action: PayloadAction<TodoType>) {
      return { status: state.status, todos: [action.payload, ...state.todos] };
    },
    delete(state, action: PayloadAction<number>) {
      return {
        status: state.status,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    },
    complete(state, action: PayloadAction<number>) {
      return {
        status: state.status,
        todos: state.todos.map((item) => {
          return item.id === action.payload
            ? {
                ...item,
                completed: !item.completed,
                updated: new Date().toISOString(),
              }
            : item;
        }),
      };
    },
    edit(
      state,
      action: PayloadAction<{
        id: number;
        text: string;
      }>
    ) {
      return {
        status: state.status,
        todos: state.todos.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                text: action.payload.text,
                updated: new Date().toISOString(),
              }
            : item;
        }),
      };
    },
    filtered(state, action: PayloadAction<TodoStatusType>) {
      return { status: action.payload, todos: state.todos };
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
