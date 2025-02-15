import React from 'react'
import { WeekBar } from '../components/week/WeekBar'

export const WeeklyView = () => {
  return (
    <section className='min-h-screen w-full  bg-green-50'>
        <div className='sm:p-10 p-2 flex flex-col gap-4'>
        <WeekBar/>
       </div>

    </section>
  )
}
