import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {

  const [amount ,setAmount] = useState(0)
  const [from ,setFrom] =useState('0')
  const [to ,setTo] = useState('0')
  const [convertedAmount , setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=> {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

    const convert = ()=>{setConvertedAmount( amount * currencyInfo[to])}
  

  return (

  //  background image carrieng div --------------------------------------------------------------

   <div className='w-full h-screen bg-no-repeat bg-cover flex items-center justify-center' style={{backgroundImage:`url("https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
      
      

                 
       {/* components and buttons  carriering div --------------------------------------------- */}

       <div className='w-auto p-6 flex flex-col items-center justify-center gap-4 backdrop-blur-md'>
       
      

{/* component 1 --------------------------------------------------------------------*/}

<InputBox
label="from"
amount={amount}
currencyOption={options}
onCurrencyChange={(currency)=>setAmount(amount)}
selectCurrency={from}
onAmountChange={(amount)=> setAmount(amount)}
/>
 
{/* swap-button--------------------------------------------------------------------- */}

<button className='w-auto absolute bg-blue-600 text-white p-2 rounded-xl -mt-14 ' 
onClick={swap}>Swap</button>

{/* component 2 ----------------------------------------------------------------------*/}

<InputBox
label="To"
amount={convertedAmount}
currencyOption={options}
onCurrencyChange={(currency)=>setAmount(amount)}
selectCurrency={to}
amountDisable/>

{/* Converter button----------------------------------------------------------------- */}

<button 
className='bg-blue-700 text-white rounded-md w-full py-2'
onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>



</div>
   </div>
  )
}

export default App
