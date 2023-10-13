import { useCallback } from 'react'
import { useState , useEffect} from 'react'


  
  function App() {
    const [password ,setPassword] = useState("")
    const [length , setLength] = useState(8)
    const [number , setNumber] = useState(false)
    const [char ,setChar] = useState(false)
  
  
    const passwordGenerator = useCallback(() => {
      let  pass = ""
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (number) {
            str += "1234567890" 
        }
        if (char) {
         str += "!@#$%^&*()_+"
        }

        for (let i = 1; i <= length; i++) {
             let char = Math.floor(Math.random() * str.length  +1)
             pass += str.charAt(char) 
        }
        setPassword(pass)
 },[length , number , char , setPassword])
  
useEffect(() => {
  passwordGenerator()
},[length,char,number ,passwordGenerator])



  return (
    
    
    <div className='w-full max-w-md mx-auto my-5 bg-gray-600  mt-6 rounded-lg ' >

     <h1 className='text-white text-center my-3'>Password generator</h1>

     <div className='flex mb-4'>
        <input type="text"  value={password} placeholder=' Password' className='w-full ml-5 mb-4 rounded-md ' readOnly />
        <button className='mr-5 mb-4 bg-blue-600 text-white text-2xl p-2 rounded-md'>Copy</button>
     </div>

     <div className='flex mx-4 gap-x-5 mb-3 justify-center align-middle'>

        <div className='mb-3'>
          <input 
          type="range" 
          min={8} 
          max={50} 
          value={length} 
          onChange={(e)=> {setLength(e.target.value)}} className='cursor-pointer'/>
          <label > length :{length}</label>
        </div>

        <div>
          <input 
          defaultChecked={number} 
          type="checkbox"
          onChange={() => setNumber((prev) => !prev)} />
          <label>Numbers</label>
        </div>

        <div>
          <input type="checkbox"
          defaultChecked={char}
          onChange={()=>{setChar((prev) => !prev)}}
          />
          <label htmlFor="">Characters</label>
        </div>

     </div>

    </div>
    
      
  )

  }


export default App
