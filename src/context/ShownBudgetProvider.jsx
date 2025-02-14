
import React, { createContext, useContext, useEffect, useState } from 'react'
export const ShownBudgetContext=createContext()
export const ShownBudgetProvider = ({children}) => {

     const oldFundShown=JSON.parse(localStorage.getItem('shownFund'))
        const[fundShown,setFundShown]=useState(oldFundShown);
        const oldDataExpensOfShown=JSON.parse(localStorage.getItem('shownExpenses')) || [];
        const pageinfo="Shown"
              const [allShownExpense, setAllShownExpense] = useState(oldDataExpensOfShown)
        useEffect(()=>{
            localStorage.setItem('shownExpenses',JSON.stringify(allShownExpense))
            localStorage.setItem('shownFund',JSON.stringify(fundShown))
        },[allShownExpense,fundShown])
  return (
    <ShownBudgetContext.Provider value={{fundShown,setFundShown,allShownExpense,setAllShownExpense,pageinfo}}>
        {children}
    </ShownBudgetContext.Provider>
  )
}
