import React from 'react'
import { CurrentWeek } from '../components/CurrentWeek'
import WeekSetting from '../components/WeekSetting'

export const RealExpenses = () => {
  return (
    <section className='min-h-screen w-full bg-green-50'>
        <div className='p-10'>
            <CurrentWeek/>
            <WeekSetting/>
        </div>

    </section>
  )
}
