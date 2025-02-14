import React from 'react'
import { CurrentWeek } from '../components/CurrentWeek'
import WeekSetting from '../components/WeekSetting'
// import ExpenseForm from '../components/ExpenseForm'
import { ExpenseList } from '../components/ExpenseList'
import { BudgetProvider } from '../context/BudgetProvider'
import ExpenseNavbar from '../components/ExpenseNavbar'
import { BrowserRouter } from 'react-router'

export const RealExpenses = () => {
  return (
    
    <BudgetProvider>
    <section className='min-h-screen w-full bg-green-50'>
        <div className='p-10'>
  
            <CurrentWeek/>
            {/* <ExpenseForm/> */}
            {/* <WeekSetting/> */}
            <ExpenseList/>
        </div>

    </section>
    </BudgetProvider>
    
  )
}
