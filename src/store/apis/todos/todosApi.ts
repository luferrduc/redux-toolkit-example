import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from './types'


export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos'
    }),
    getTodoById: builder.query<Todo, number>({
      query: (todoId) => `/todos/${todoId}`
    })
  })
})


export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi