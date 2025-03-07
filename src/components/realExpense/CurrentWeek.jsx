import React, { useContext, useEffect, useState } from 'react';
import { FaCalendarWeek } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { BudgetContext } from '../../context/BudgetProvider';
import WeekSetting from './WeekSetting';
// import { trial } from '../week/WeekBar';

export const CurrentWeek = () => {
    const [day1, setDay1] = useState([]);  

    useEffect(() => {
        const daysData = localStorage.getItem('days');

    
        if (daysData) {
            try {
                const parsedData = JSON.parse(daysData);
                setDay1(parsedData);  
            } catch (error) {
                console.error("Error parsing stored days:", error);
                setDay1([]); 
            }
        }
    }, []);
    
    
     
    const secondBudget=JSON.parse(localStorage.getItem('shownFund'));
    const {fund,setFund}=useContext(BudgetContext)
    

    const handleNewWeek=(e)=>{
        trial();
    }

  return (
    <>
    <div>
    <div className='p-10 w-full border items-center  mb-10  gap-5 justify-between rounded-2xl bg-white '>

      <div className='sm:flex justify-between items-center '>
      <div>
            <h1 className='font-semibold  text-2xl'>
                Current Week
            </h1>
            <h3 className='text-gray-800 flex gap-2 text-lg font-bold mt-2'>
                {day1.map((d,i)=>(
                    <div key={i}>
                          {i==0?d.date+"  to":d.date}  
                    </div>
                ))}
            </h3>
        </div>
     
        
      </div>

       <div  className='sm:flex justify-between gap-5'>
       <div className='sm:flex w-full mt-3  bg-green-50 flex-col'>
            <a href='/'  className='w-full p-2 bg-green-50'>
                <p className='text-md font-semibold  text-green-600'>   Real Budget Remaining</p>
                <p className='text-3xl inline-flex items-center text-green-800 font-semibold'> <MdOutlineCurrencyRupee  className='mt-1 text-2xl' /> {fund}</p>
            </a>
        
        </div>
        <div className='sm:flex bg-blue-50 w-full mt-3 flex-col'>
            <a href='/shown' className='w-full p-2 '>
                <p className='text-md font-semibold  text-blue-600'>   Shown Budget Remaining</p>
                <p className='text-3xl inline-flex items-center text-blue-800 font-semibold'> <MdOutlineCurrencyRupee  className='mt-1 text-2xl' /> {secondBudget}</p>
            </a>
        
        </div>
       </div>
    </div>
    <div className='sm:w-1/3 '>
    <WeekSetting  weekData={fund} weekDataHandler={setFund} day1={day1}  day1Handler={setDay1}  />
    </div>
    </div>
    </>
  )
}
