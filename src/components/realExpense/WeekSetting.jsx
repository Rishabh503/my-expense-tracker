import React, { useContext, useEffect, useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BudgetContext } from '../../context/BudgetProvider';
import { ShownBudgetContext } from '../../context/ShownBudgetProvider';
function WeekSetting(props) {
  

    const {allExpense,setAllExpense}=useContext(BudgetContext)
    const {allShownExpense,setAllShownExpense,setFundShown}=useContext(ShownBudgetContext)
    
   
    const [budget, setBudget] = useState(500);
    const [days, setDays] = useState(4);


    
   
   let daysData=[]


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        props.weekDataHandler(budget);
        setFundShown(budget)

        const today = new Date();
        const finalDate = new Date();
        finalDate.setDate(today.getDate() + (days - 1)); // Last day is today + 3 days (if 4-day week)
        
        // Send only start and end date
        daysData=[{ date: today.toDateString() }, { date: finalDate.toDateString() }]
        localStorage.setItem('days',JSON.stringify(daysData))
        props.day1Handler(daysData);
        
        setAllExpense([])
        setAllShownExpense([])
            location.reload()
    }
  
    
  return (
    <div className='p-10 w-full border items-center    gap-5 justify-between rounded-2xl bg-white '>
         <p className='font-semibold text-2xl inline-flex items-center text-center gap-2'>
         <IoSettingsOutline  className='text-3xl text-green-800 font-bold' /> Budget Settings</p>
        <form className='flex flex-col gap-5 mt-2'
         onSubmit={(e)=>handleSubmit(e)} >
            <div>
                <h1 className='text-gray-800 text-xl font-semibold'>Budget</h1>
                <input value={budget} type="number" 
                    onChange={(e)=>{setBudget(e.target.value)}}
                    className='border mt-2 w-full text-xl shadow-md'
                />
            </div>
            <div>
                <h1 className='text-gray-800 text-xl font-semibold'>Days</h1>
                <input  value={days} type="number" onChange={(e)=>{setDays(e.target.value)}} 
            className='border w-full text-xl shadow-md mt-2'/>
            </div>
            <button className='inline-flex items-center justify-center text-xl gap-2
                       px-5 py-3 text-white text-center w-full bg-green-600 rounded-lg'>
                       <MdOutlineCurrencyRupee  className='mt-1 text-2xl' />  Update Budget
                       </button>
        </form>
    </div>
  )
}

export default WeekSetting