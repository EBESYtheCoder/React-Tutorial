import { useState } from 'react'
import './App.css'
import Card from './combonents/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'
      >Vite with Tailwind </h1>
      <Card username="Ebenezer" />
      <Card username="Bryan" url='https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg' />
      <Card username="Thamas" post="Staff Engineer" />

    </>
  )
}

export default App
