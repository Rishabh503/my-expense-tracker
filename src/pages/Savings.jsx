import React from 'react'
import { SavingsBar } from '../components/SavingsBar'

export const Savings = () => {
  return (
    <section className='min-h-screen w-full  bg-green-50'>
        <div className='p-10 flex flex-col gap-4'>
      <SavingsBar/>
    </div>

    </section>
  )
}
