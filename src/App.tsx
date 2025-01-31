import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { decrement, increment, incrementByAmount } from './store/slices/counter'

function App() {

  const { counter } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card" style={{ display: 'flex', gap: "8px"}}>
        <button onClick={() =>  dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() =>  dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() =>  dispatch( incrementByAmount(10) )}>
          Increment By 10
        </button>
      </div>
    </>
  )
}

export default App
