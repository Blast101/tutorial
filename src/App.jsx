import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'
import Box from './Box'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Button/>      
  <Box/>
    </>
  )
}

export default App
