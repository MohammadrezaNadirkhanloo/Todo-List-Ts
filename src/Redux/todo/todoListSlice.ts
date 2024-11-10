import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo  {
  title: string;
  id: number;
  complete: boolean;
};

export type CounterState = Todo[];

const initialState: CounterState = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleComplete } = todoListSlice.actions;

export default todoListSlice.reducer;
