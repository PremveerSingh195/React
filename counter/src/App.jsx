import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(4)

  function addvalue() {
    if (counter < 20) {
      setCounter()
    }
  }
    const removeValue = () => {
      if (counter > 0) {
        setCounter(counter-1)
      }
    }
  return (
    <>
    <h1 className="text-3xl font-bold underline text-yellow-400"> Counter </h1>
     <button onClick={addvalue}>Add me</button> <br />
     <button onClick={removeValue}>Remove value</button>
     <h3>Final value: {counter}</h3>
  </>
    
  )
}

export default App
