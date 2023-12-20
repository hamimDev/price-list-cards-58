import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Products from './products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Products></Products>
     <h1 className='lg:text-9xl font-bold text-blue-900 text-center'>Hello  from tailwind</h1>
    </div>
  )
}

export default App
