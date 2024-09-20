import { useState } from 'react'
import './App.css'
import Card from './combonents/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'
      >Vite with Tailwind</h1>
      <Card />
    </>
  )
}

export default App
