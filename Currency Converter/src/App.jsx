import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";



function App() {
   
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to ,setTo] = useState("inr")
  const [convertedAmount ,setConvertedAmount] = useState(0)
  


  return (
    <div className="w-full h-screen bg-no-repeat bg-cover justify-center items-center flex flex-wrap" style={{backgroundImage:`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
      <form action="">
      <div className="bg-white/30 backdrop:blur-lg p-6 flex flex-col gap-6 justify-center items-center rounded-lg w-auto" >
                     <InputBox
                       label="from"
                       amount={amount}
                       currencyOptions={options}
                     />
                     <button className="text-white bg-blue-500 rounded-lg p-3 w-20 absolute mb-16 " >Swap</button>
                     <InputBox/>
                   <button className="text-white bg-sky-600 rounded-4xl px-6 py-3 cursor-pointer w-full rounded-3xl">
                      Convert USD to INR 
                   </button>
               </div>
      </form>
               
    </div>
  )
   
} 

export default App
