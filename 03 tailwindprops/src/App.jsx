import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1 className='bg-green500 text-black p-4 rounded-xl mb-4 ' >Tailwind test</h1>
    <Card username = "sunny sister" btntext = "clickme" />
    <Card username= "honey rose" btntext = "visit me"/>
    </>
  )
}

export default App
