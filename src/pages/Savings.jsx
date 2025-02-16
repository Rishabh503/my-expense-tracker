import React from 'react'
import { SavingsBar } from '../components/savings/SavingsBar'
import MySavingsBar from '../components/savings/MySavingsBar'

export const Savings = () => {
  return (
    <section className='min-h-screen w-full  bg-blue-100'>
        <div className='sm:p-10 p-2 flex flex-col gap-4'>
      <SavingsBar/>
      <MySavingsBar/>
    </div>

    </section>
  )
}
