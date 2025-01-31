import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface Todo {
  description: string;
  done: boolean;
}

export interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todos
// export default counterSlice.reducer
