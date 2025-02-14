import React, { createContext, useEffect, useState } from 'react'


export const BudgetContext=createContext();
export const BudgetProvider = ({children}) => {
    const oldFund=JSON.parse(localStorage.getItem('fund'))
    const[fund,setFund]=useState(oldFund);
    const oldDataExpens=JSON.parse(localStorage.getItem('expenses')) || [];
    const pageinfo="Real"
          const [allExpense, setAllExpense] = useState(oldDataExpens)
    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(allExpense))
        localStorage.setItem('fund',JSON.stringify(fund))
    },[allExpense,fund])
  return (
    <BudgetContext.Provider value={{fund,setFund,allExpense,setAllExpense,pageinfo}}>  
        {children}
    </BudgetContext.Provider>
  )
}
