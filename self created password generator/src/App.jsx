import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length , setLength] = useState(8)
  const [char ,setChar] = useState(false)
  const [number , setNumber] = useState(false)
  const [password , setPassword] = useState("")

  function passwordGenerator() {
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "1234567890"
    }
    if (char) {
      str += "~!@#$%^&*()_+"
    }

    for (let i = 1; i <= length; i++) {
      
         let randomPointOnstr = Math.floor(Math.random()*str.length +1)
         pass += str.charAt(randomPointOnstr)

    }  

    setPassword(pass)

  }
  useEffect(()=>{
    passwordGenerator()
  },[length,char,number,setPassword])

  const passwordSelector = useRef(null)


  const copyToClipBoard = useCallback( () =>{
    window.navigator.clipboard.writeText(password);
    passwordSelector.current?.select()
    passwordSelector.current?.setSelectionRange(0,30)
    
  },[password])

  return (
  <div className="w-full h-screen flex justify-center items-center">
      <div className="w-auto h-auto bg-gray-500 px-10 py-5  flex flex-col items-center justify-center gap-3 rounded-lg">
           <h1 className="text-white text-4xl">Password Generator</h1>
           <div className="flex items-center justify-center text-4xl">
                <input 
                ref={passwordSelector}
                value={password}
                className="rounded-xl text-3xl p-2"
                readOnly
                type="text"
                placeholder="Password" />
                <button className="bg-blue-500 rounded-xl p-1 hover:bg-blue-700 active:bg-blue-800 text-white text-4xl " onClick={copyToClipBoard}>Copy</button>
           </div>
           <div className="flex gap-4 items-center justify-center" >
                <input type="range" min={8} max={100} onChange={(e)=> setLength(e.target.value)} /> <label > length :{length} </label>
                <input type="checkbox" onChange={()=>{
                  setChar((prev) => !(prev))
                }}/><label> CharAllowed</label>
                <input type="checkbox" onChange={()=>setNumber((prev => !(prev)))}/><label>NumberAlowed</label>
           </div>
      </div>
  </div>
  )
}

export default App
