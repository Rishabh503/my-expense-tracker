import React from 'react'
import { SavingsBar } from '../components/savings/SavingsBar'
import MySavingsBar from '../components/savings/MySavingsBar'

export const Savings = () => {
  return (
    <section className='min-h-screen w-full  bg-green-50'>
        <div className='p-10 flex flex-col gap-4'>
      <SavingsBar/>
      <MySavingsBar/>
    </div>

    </section>
  )
}
