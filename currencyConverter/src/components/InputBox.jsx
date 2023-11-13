import React, { useId } from 'react'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOption = [],
        selectCurrency ="usd",
        amountDisable = false,
        currencyDisable =false,



    }
) {

    const amountInputId= useId()
    return (

        //   components container div----------------------------------------------------

        <div className='w-auto bg-white p-3 flex flex-row justify-center items-start gap-24'>
         
         {/* left side of componenet ------------------------------------------------------ */}

         <div className='w-auto flex flex-col gap-3 justify-start items-start'>
            <label htmlFor="amountInputId">{label}</label>
            <input 
            id={amountInputId}
            placeholder='number'
            type="number"
            disabled={amountDisable}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
         </div>

         {/* right side of componenet ----------------------------------------------------*/}

           <div className='w-auto flex flex-col gap-3 justify-end items-end'>
             <label >Currency type</label>
             <select 
             value={selectCurrency}
             onChange = {(e)=> onCurrencyChange && onCurrencyChange((e)=> e.target.value)}
             disabled = {currencyDisable} 
             >
                

                {currencyOption.map((currency)=> 
                
                <option value={currency} key={currency}>
                {currency}
                </option>

                )}


             </select>
           </div>

        </div>
    )
}

export default InputBox
