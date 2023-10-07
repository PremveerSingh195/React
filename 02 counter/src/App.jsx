import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 1;
  let [counter , usecounter] = useState(10)

  const addValue = () => {
    if (counter<=20) {
      usecounter(prevcounter => prevcounter+1)
      usecounter(prevcounter => prevcounter+1)
      usecounter(prevcounter => prevcounter+1)
      usecounter(prevcounter => prevcounter+1)
    }
  }

  const removeValue = ()=>{
    if (counter>0) {
      usecounter(counter- 1)
    }
  }



  return (
    <>
     <h1>Chai  aur  react</h1>
     <h3>Counter value : {counter}</h3>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value</button>


     <footer>{counter}</footer>

    </>
  )
}

export default App
