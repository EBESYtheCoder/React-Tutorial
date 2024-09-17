import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  childen: 'click me to visit google'
}


const areactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click to visit google'
)
*/



const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  AnotherElement
)
