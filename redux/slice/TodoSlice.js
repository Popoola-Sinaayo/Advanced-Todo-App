import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload, "payload");
      state.todos.push(action.payload);
      console.log(state.todos);
    },
    toggleCompletedTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].isCompleted = !state.todos[index].isCompleted;
    },
    deleteAllTodo: (state, action) => {
      state.todos = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleCompletedTodo, deleteAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
