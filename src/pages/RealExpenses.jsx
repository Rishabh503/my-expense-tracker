import React from 'react'
import { CurrentWeek } from '../components/CurrentWeek'
import WeekSetting from '../components/WeekSetting'
// import ExpenseForm from '../components/ExpenseForm'
import { ExpenseList } from '../components/ExpenseList'

export const RealExpenses = () => {
  return (
    <section className='min-h-screen w-full bg-green-50'>
        <div className='p-10'>
            <CurrentWeek/>
            {/* <ExpenseForm/> */}
            {/* <WeekSetting/> */}
            <ExpenseList/>
        </div>

    </section>
  )
}
