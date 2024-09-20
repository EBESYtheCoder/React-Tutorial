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

createRoot(document.getElementById('root')).render(
  <App />
)
