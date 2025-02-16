import React from 'react'
import { WeekDisplay } from './WeekDisplay';

export const trial=()=>{
  const days=JSON.parse(localStorage.getItem(('days'))) ||[];
  const realExpenseData=JSON.parse(localStorage.getItem('expenses')) || [];
  const shownExpenseData=JSON.parse(localStorage.getItem('shownExpenses')) || [];
  
  // console.log("that is working")
  return {days,realExpenseData,shownExpenseData};
}
export const WeekBar = () => {
  const day=trial();
  // console.log(day.days[0])
  const realData=day.realExpenseData ?? "";
  const shownData=day.shownExpenseData ?? "";
  // console.log(realData)
  return (
    <div className='bg-white p-10 flex flex-col gap-4 border rounded-lg' >
      <div className=' sm:w-full  flex flex-wrap gap-5 items-center justify-between rounded- '>
      <div>
        {day.days.length>0?day.days[0].date:
        "not works"}
        Week Info
      </div>
      <div className='flex gap-10 flex-wrap-reverse items-center'>
        <div>
          <h1>
            Shown Expense
          </h1>
          <h2>
            300
          </h2>
        </div>
        <div>
          <h1>
            Shown Expense
          </h1>
          <h2>
            300
          </h2>
        </div>
        <div>
          <h1>
            Shown Expense
          </h1>
          <h2>
            300
          </h2>
        </div>
      </div>
      
      </div>
      <div className='flex flex-col sm:flex-row '>
          <WeekDisplay data={realData}/>
          <WeekDisplay data={shownData}/>
      </div>
    </div>
    
  )
}
