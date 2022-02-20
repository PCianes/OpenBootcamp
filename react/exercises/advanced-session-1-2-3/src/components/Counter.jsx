import React from 'react'
import { useCounter } from '../hooks/useCounter'

export function Counter() {
  const { counter, setCounter } = useCounter(10, 5, 100)

  return (
    <div>
      <h2>¡Hello Counter!</h2>
      <p style={{ color: 'tomato', fontWeight: 'bold' }}>{counter}</p>
      <button onClick={setCounter.increment}>Increment</button>
      <button onClick={setCounter.decrement}>Decrement</button>
      <button onClick={setCounter.reset}>Reset</button>
      <input type="number" placeholder="1" min="0" onChange={(step) => setCounter.newStep(step.target.value)} />
    </div>
  )
}