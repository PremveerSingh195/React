import { useState } from 'react'


function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadod-lg bg-white px-3 py-2 rounded-2xl'>
             <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
             <button onClick={()=> setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>
             <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
             <button onClick={()=> setColor("Orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Orange"}}>Orange</button>
             <button onClick={()=> setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
          </div>
       </div>
    </div>
  )
}

export default App
