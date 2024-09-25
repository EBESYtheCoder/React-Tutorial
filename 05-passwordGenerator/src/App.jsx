/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setNumberCharAllowed] = useState(false);


  return (
    <>
      <h1 className='bg-red-400'>setup ready</h1>
    </>
  )
}

export default App
