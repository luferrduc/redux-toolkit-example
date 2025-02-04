import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
// import { todoSlice } from './slices/todos/todosSlice'
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './apis/todos'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // todos: todoSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch