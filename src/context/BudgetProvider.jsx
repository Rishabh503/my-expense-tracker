import React, { createContext, useEffect, useState } from 'react'


export const BudgetContext=createContext();
export const BudgetProvider = ({children}) => {
    const oldFund=JSON.parse(localStorage.getItem('fund'))
    const[fund,setFund]=useState(oldFund);
    const oldDataExpens=JSON.parse(localStorage.getItem('expenses'));
    //  const [allExpense, setAllExpense] = useState([{
    //         amount:"10",
    //         category:"rishabh",
    //         description:"trial mode",
    //     }
    // ])
          const [allExpense, setAllExpense] = useState(oldDataExpens)

    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(allExpense))
        localStorage.setItem('fund',JSON.stringify(fund))
    },[allExpense])
  return (
    <BudgetContext.Provider value={{fund,setFund,allExpense,setAllExpense}}>  
        {children}
    </BudgetContext.Provider>
  )
}
