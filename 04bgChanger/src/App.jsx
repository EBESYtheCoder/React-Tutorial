/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // const changeColor = (color) => {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 s' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Red</button>

          <button
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Blue</button>

          <button
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Green</button>
        </div>
      </div>

    </div>
  )
}

export default App
