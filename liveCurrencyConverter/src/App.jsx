import { useState } from 'react'
import InputBox from './components/InputBox'
import UseCurrencyData from './hooks/useCurrencyData'

function App() {
  
   const [amount , setAmount] = useState(0)
   const [from , setFrom] = useState("usd")
   const [to , setTo] = useState("inr")
   const [convertedAmount , setConvertedAmount] = useState(0)   

   const currencyInfo = UseCurrencyData(from)

   const options = Object.keys(currencyInfo)

   const swap= function () {
     setFrom(to)
     setTo(from)
     setAmount(convertedAmount)
     setConvertedAmount(amount)
   }

   const convert =()=> {setConvertedAmount(amount * currencyInfo[to])}


  return (
       <div 
       className='w-full h-screen bg-no-repeat bg-cover flex justify-center items-center'
       style={{backgroundImage:`url("https://images.pexels.com/photos/19065036/pexels-photo-19065036/free-photo-of-anis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}}>
            <div className='w-max flex flex-col justify-center items-center bg-white/40 backdrop-blur-lg p-5'>
                <InputBox
                 label = "From"
                 amount={amount}
                 onAmountChange = {(amount)=> setAmount(amount)}
                 selectCurrency={from}
                 onCurrencyChange={(currency)=> setFrom(currency)}
                 currencyOptions={options}
                />
                <button className='p-2 text-white bg-blue-600 rounded-lg m-2' onClick={swap}>swap</button>
                <InputBox
                label = "To"
                amount={convertedAmount}
                amountDisable
                selectCurrency={to}
                onCurrencyChange={(currencyto)=> setTo(currencyto)}
                currencyOptions={options}
                />
                <button type='submit' className='p-2 text-white bg-blue-600 rounded-lg m-2' onClick={convert}>Convert</button>
            </div>
       </div>
  )
}

export default App
