import React from 'react'
import { Trial, WeekBar } from '../components/week/WeekBar'



export const WeeklyView = () => {

  return (
    <section className='min-h-screen w-full  bg-slate-300'>
        <div className='sm:p-10 p-2 flex flex-col gap-4'>
        <Trial/>
       </div>

    </section>
  )
}
