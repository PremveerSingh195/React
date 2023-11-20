import React from 'react'

function InputBox(

    {
      label,
      amount,
      onAmountChange,
      amountDisable = false,
      selectCurrency = "usd",
      onCurrencyChange,
      currencyDisable = false,
      currencyOptions = []
    }
) 


{
    return (
        <div className='w-max p-3 flex flex-row justify-end items-end bg-white'>
             <div className='flex flex-col'>
                 <label htmlFor="">{label}</label>
                 <input 
                 type="number"
                 placeholder='amount'
                 value={amount}
                 onChange = {(e) => onAmountChange && onAmountChange(e.target.value) }
                 disabled = {amountDisable}
                 />
             </div>
             <div>
                <p>Currency Type</p>
                <select
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >   
               {/* remember the key in loops in react */}
               {currencyOptions.map((currency) => (<option key={currency} value={currency}>
                      {currency}
               </option>))}
                </select>
             </div>
        </div>
    )
}

export default InputBox
