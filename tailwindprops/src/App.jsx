import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Cards/Card'
import Card from './Cards/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1>Tailwind Test</h1>
      <Card username = "sunny leone" btntext = "clickme"/>
      <Card username = "eva adoms" btntext = "visit me"/>
      <Card username = "mia ji" btntext= "touch me"/>
       </>

  )
  }

export default App
