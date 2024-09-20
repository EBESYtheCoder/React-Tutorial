/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './combonents/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name: 'Ebenezer',
    address: {
      city: 'Algiers',
      state: 'Alger',
      country: 'Algeria'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'
      >Vite with Tailwind </h1>
      <Card username="Ebenezer" />
      <Card username="Bryan" myArray={newArr} />
      <Card username="Thamas" post="Staff Engineer" />

    </>
  )
}

export default App
