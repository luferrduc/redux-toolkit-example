import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todos"



export const TodoApp = () => {

  const [todoId, setTodoId] = useState<number>(1)
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId)


    const nextTodo = () => {
      setTodoId(prevId => prevId + 1)
    }
  
    const prevTodo = () => {
  
      if(todoId === 1) return
      setTodoId( prevId => prevId - 1 )
    }
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {/* <ul style={{
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        {
          isLoading 
          ? <div style={{ height: "100%", display: "flex", alignContent: "center", alignSelf: "center" }}><span>Loading...</span></div>
          : todos.map( todo => ( 
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE' : 'Pending'}</strong> {todo.title}
            </li>
          ))
        }
   
      </ul> */}


      {
        isLoading
        ? <div style={{ height: "100%", display: "flex", alignContent: "center", alignSelf: "center" }}><span>Loading...</span></div>
        :     
        <div style={{ minHeight: "250px", display: "flex", flexDirection: "column", alignContent: "center", alignSelf: "center" }}>
          <h3>Todo ID: { todo?.id }</h3>
          <p style={{ paddingBottom: '10px', paddingTop: '10px', margin: 0}}><strong>Description:</strong> {todo?.title}</p>
          <p style={{ paddingBottom: '10px', paddingTop: '10px', margin: 0}}><strong>Status:</strong> {todo?.completed ? 'DONE' : 'Pending'}</p>
        </div>
      }
      
      <section style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "center"
      }}>
      <button disabled={isLoading || todoId == 1 } onClick={ prevTodo }>
          Prev Todo
        </button>
        <button disabled={isLoading} onClick={ nextTodo }>
          Next Todo
        </button>
      </section>

    </>
  )
}