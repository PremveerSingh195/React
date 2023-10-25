import React from "react";

function InputBox(
    {
        label,
        amount,
        amountdisable = false,
        onAmountChange,
        selectCurrency = "usd",
        onCurrencyChange,
        currencyDisable = false,
        currencyOptions = [],
    }
) {

 

    return(
        <div className=" flex rounded-md bg-white p-4 gap-28">
           <div className="flex flex-col justify-center items-start gap-1 outline-none">
               <label>{label}</label>
               <input 
               type="number" 
               className="w-24"
               value={amount}
               placeholder="Amount"
               disabled={amountdisable}
               onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                />
           </div>
           <div className="flex flex-col justify-center items-end gap-1">
               <label >Currency Type</label>
               <select
               value={selectCurrency}
               className="bg-gray-100 cursor-pointer outline-1"
               onChange={(e)=> 
                onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled = {currencyDisable} 
               >
                  {currencyOptions.map((currency) =>(
                    <option value="{currency}" key={currency}>{currency}</option>
                  ))}
               </select>
           </div>

        </div>
    )
}

export default InputBox;