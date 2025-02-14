import React, { useContext, useState } from 'react';
import { FaCalendarWeek } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { ShownBudgetContext } from '../../context/ShownBudgetProvider';
import ShownWeekSetting from '../shownExpenese/ShownWeekSetting';

export const ShownCurrentWeek = () => {
   
    const[day1,setDay1]=useState([]); 
 const {fundShown,setFundShown}=useContext(ShownBudgetContext)
//  console.log(fundShown,setDay1)
const secondBudget=JSON.parse(localStorage.getItem('fund'))
  return (
    <>
    <div className='p-10 w-full border items-center    gap-5 justify-between rounded-2xl bg-white '>

      <div className='sm:flex justify-between items-center '>
      <div>
            <h1 className='font-semibold  text-2xl'>
                Current Week
            </h1>
            <h3 className='text-gray-800 flex gap-2 text-sm mt-2'>
                {day1.map((d,i)=>(
                    <div key={i}>
                          {i==0?d.date+"  to":d.date}  
                    </div>
                ))}
            </h3>
        </div>
     
         <div className='mt-4 items-center'>
            <button className='inline-flex items-center justify-center text-xl gap-2
                                   px-5 py-3 text-white text-center w-full bg-green-600 rounded-lg'>
            <FaCalendarWeek  className='mt-1 text-2xl' />  Start New Week
            </button>
         </div>
      </div>

       <div  className='sm:flex justify-between gap-5'>
       <div className='sm:flex w-full mt-3 flex-col'>
            <div className='w-full p-2 bg-green-50'>
                <p className='text-md font-semibold  text-green-600'>   Real Budget Remaining</p>
                <p className='text-3xl inline-flex items-center text-green-800 font-semibold'> <MdOutlineCurrencyRupee  className='mt-1 text-2xl' /> {secondBudget}</p>
            </div>
        
        </div>
        <div className='sm:flex w-full mt-3 flex-col'>
            <div className='w-full p-2 bg-blue-50'>
                <p className='text-md font-semibold  text-blue-600'>   Shown Budget Remaining</p>
                <p className='text-3xl inline-flex items-center text-blue-800 font-semibold'> <MdOutlineCurrencyRupee  className='mt-1 text-2xl' /> {fundShown}</p>
            </div>
        
        </div>
       </div>
    </div>
    <ShownWeekSetting weekData={fundShown} weekDataHandler={setFundShown} day1={day1}  day1Handler={setDay1}  />
    </>
  )
}
