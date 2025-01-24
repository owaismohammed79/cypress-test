import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const todos = [
    { id: 1, text: 'Learn HTML' },
    { id: 2, text: 'Learn CSS' },
    { id: 3, text: 'Build Something Awesome' },
    { id: 4, text: 'Learn JavaScript' },
    { id: 5, text: 'Build Something Awesome' },
    { id: 6, text: 'Learn React' },
    { id: 7, text: 'Build Something Awesome' },
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev"  data-testid="vite-link">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 data-testid="cypress-title">Vite + React</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>{todo.text}</li>
        ))}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
