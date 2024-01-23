import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveDrawer from './pages/Test/Drawer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveDrawer />
    </>
  )
}

export default App
