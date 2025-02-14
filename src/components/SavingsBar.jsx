import React from 'react'

export const SavingsBar = () => {
    const real=JSON.parse(localStorage.getItem('fund'))
    const shown=JSON.parse(localStorage.getItem('shownFund'))
  return (
    
    <div className='p-10 border items-center w-3/4   gap-5 justify-between rounded-2xl bg-white '>
        <div>

        </div>
        <div className='flex flex-col sm:flex-row gap-10  justify-between'>
        <div className='bg-green-100 sm:w-1/3 w-full h-32 p-4 rounded-md'>
            <h1 className='text-green-500 text-xl'>Real Expenses</h1>
            <p className='text-4xl font-bold text-green-800'>
                {real}
            </p>
            </div>
            <div className='bg-blue-100 w-full sm:w-1/3 h-32 p-4 rounded-md'>
            <h1 className='text-blue-500 text-xl'>Shown Expenses</h1>
            <p className='text-4xl font-bold text-blue-800'>
                {shown}
            </p>
            </div>
            <div className='bg-purple-100 w-full sm:w-1/3 h-32 p-4 rounded-md'>
            <h1 className='text-purple-500 text-xl'>Savings</h1>
            <p className='text-4xl font-bold text-purple-800'>
                {real-shown}
            </p>
            </div>
           
            
            
            
        </div>
    </div>
  )
}
