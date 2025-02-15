import React from 'react'
// import { am } from './shownExpenese/ShownList';

export const SavingsBar = () => {
    const real=JSON.parse(localStorage.getItem('fund'))
    const realExpense=JSON.parse(localStorage.getItem('expenses'))
    let realTotalAmount=0;
    const totalAm=realExpense.forEach((ex)=>(realTotalAmount+=Number(ex.amount)))
    console.log(realTotalAmount)


    const shown=JSON.parse(localStorage.getItem('shownFund'))
    const shownExpense=JSON.parse(localStorage.getItem('shownExpenses'))
    let shownTotalAmount=0;
    const shownTotal=shownExpense.forEach((ex)=>(shownTotalAmount+=Number(ex.amount)))
    console.log(shownTotalAmount)

  return (
    
    <div className='p-10 border items-center sm:w-3/4   gap-5 justify-between rounded-2xl bg-white '>
        <div>

        </div>
        <div className='flex flex-col sm:flex-row gap-10  justify-between'>
        <div className='bg-green-100 sm:w-1/3 w-full h-32 p-4 rounded-md'>
            <h1 className='text-green-500 text-xl'>Real Expenses</h1>
            <p className='text-4xl font-bold text-green-800'>
                {realTotalAmount}
            </p>
            </div>
            <div className='bg-blue-100 w-full sm:w-1/3 h-32 p-4 rounded-md'>
            <h1 className='text-blue-500 text-xl'>Shown Expenses</h1>
            <p className='text-4xl font-bold text-blue-800'>
                {shownTotalAmount}
            </p>
            </div>
            <div className='bg-purple-100 w-full sm:w-1/3 h-32 p-4 rounded-md'>
            <h1 className='text-purple-500 text-xl'>Savings</h1>
            <p className='text-4xl font-bold text-purple-800'>
                {shownTotalAmount-realTotalAmount}
            </p>
            </div>
           
            
            
            
        </div>
    </div>
  )
}
