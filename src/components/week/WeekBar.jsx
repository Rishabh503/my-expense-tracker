import React from 'react'
import { WeekDisplay } from './WeekDisplay';

export const Trial=()=>{
  const days=JSON.parse(localStorage.getItem(('days'))) ||[];
  const realExpenseData=JSON.parse(localStorage.getItem('expenses')) || [];
  const shownExpenseData=JSON.parse(localStorage.getItem('shownExpenses')) || [];

  let realTotalAmount=0;
  const totalAm=realExpenseData.forEach((ex)=>(realTotalAmount+=Number(ex.amount)))

  let shownTotalAmount=0;
  const stotalAm=shownExpenseData.forEach((ex)=>(shownTotalAmount+=Number(ex.amount)))
  

  return <WeekBar shownTotalAmount={shownTotalAmount} days={days} realExpenseData={realExpenseData} shownExpenseData={shownExpenseData} realTotalAmount={realTotalAmount} />
}
export const WeekBar = ({days,realExpenseData,shownExpenseData,realTotalAmount,shownTotalAmount}) => {
  
  // console.log(realData)
  return (
    <div className='bg-white p-10 flex flex-col gap-4 border rounded-lg' >
      <div className=' sm:w-full  flex flex-wrap gap-5 items-center justify-between rounded- '>
      <div className='text-lg px-3 font-semibold '>
        {days.length>0?days[0].date + " to " + days[1].date:
        "Week Info"}
      </div>
      <div className='flex  text-md  gap-5 sm:gap-10 justify-between  items-center'>
        <div>
          <h1>
            Real 
          </h1>
          <h2 className='text-center text-red-500 text-2xl font-semibold'>
            {realTotalAmount}
          </h2>
        </div>
        <div>
          <h1>
            Shown 
          </h1>
          <h2 className='text-center text-red-700 text-2xl font-semibold'>
            {shownTotalAmount}
          </h2>
        </div>
        <div>
          <h1 >
            Savings
          </h1>
          <h2 className='text-center text-green-700 text-2xl font-semibold'>
            {shownTotalAmount-realTotalAmount}
          </h2>
        </div>
      </div>
      
      </div>
      <div className='flex gap-8 mt-10 flex-col sm:flex-row '>
          <WeekDisplay data={realExpenseData} type={"Real"}/>
          <WeekDisplay data={shownExpenseData} type={"Shown"}/>
      </div>
    </div>
    
  )
}
