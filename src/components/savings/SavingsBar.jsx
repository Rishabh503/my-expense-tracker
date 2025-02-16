import React from 'react'
// import { am } from './shownExpenese/ShownList';

export const SavingsBar = () => {
    const real=JSON.parse(localStorage.getItem('fund')) || 0;
    const realExpense=JSON.parse(localStorage.getItem('expenses')) || [];
    let realTotalAmount=0;
    const totalAm=realExpense.forEach((ex)=>(realTotalAmount+=Number(ex.amount)))
    // console.log(realTotalAmount)


    const shown=JSON.parse(localStorage.getItem('shownFund')) || 0;
    const shownExpense=JSON.parse(localStorage.getItem('shownExpenses')) || [];
    let shownTotalAmount=0;
    const shownTotal=shownExpense.forEach((ex)=>(shownTotalAmount+=Number(ex.amount)))
    // console.log(shownTotalAmount)

    const day1=JSON.parse(localStorage.getItem('days'))
    // console.log(day1)
    const val1=day1[0];
    const date=new Date();

    // console.log(val1.date.,day1[0],date.getDate()-day1[0].date)
  return (
    
    <div className='p-10 border items-center sm:w-full   gap-5 justify-between rounded-2xl bg-white '>
        <div>
        <h3 className='text-gray-800 flex gap-2 text-lg font-bold my-2'>
                {day1.map((d,i)=>(
                    <div key={i}>
                          {i==0?d.date+"  to":d.date}  
                    </div>
                ))}
            </h3>
        </div>
        <div className='flex flex-col sm:flex-row gap-10  justify-between'>
        <div className='bg-green-100 sm:w-1/4 w-full h-32 p-4 rounded-md'>
            <h1 className='text-green-500 text-xl'>Real Expenses</h1>
            <p className='text-4xl font-bold text-green-800'>
                {realTotalAmount}
            </p>
            </div>
            <div className='bg-blue-100 w-full sm:w-1/4 h-32 p-4 rounded-md'>
            <h1 className='text-blue-500 text-xl'>Shown Expenses</h1>
            <p className='text-4xl font-bold text-blue-800'>
                {shownTotalAmount}
            </p>
            </div>
            <div className='bg-purple-100 w-full sm:w-1/4 h-32 p-4 rounded-md'>
            <h1 className='text-purple-500 text-xl'>Savings</h1>
            <p className='text-4xl font-bold text-purple-800'>
                {shownTotalAmount-realTotalAmount}
            </p>
            </div>
            <div className='bg-purple-100 w-full hidden sm:block sm:w-1/4 h-32 p-4 rounded-md'>
            <h1 className='text-purple-500 text-xl'>{day1.length>0?
            day1[0].date:""}</h1>
            <h1 className='text-purple-500 text-start text-xl'>to</h1>
           
            <h1 className='text-purple-500 text-xl'>{day1.length>0?
            day1[1].date:""}</h1>
            
            </div>
            
            
            
        </div>
    </div>
  )
}
