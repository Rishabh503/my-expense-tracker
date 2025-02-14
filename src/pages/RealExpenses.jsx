import React from 'react'
import { CurrentWeek } from '../components/realExpense/CurrentWeek'
// import ExpenseForm from '../components/ExpenseForm'
import { ExpenseList } from '../components/realExpense/ExpenseList'
import { BudgetProvider } from '../context/BudgetProvider'

export const RealExpenses = () => {
  return (
    
    <BudgetProvider>
    <section className='min-h-screen w-full  bg-green-50'>
        <div className='p-10 flex flex-col gap-4'>
  
            <CurrentWeek/>
            {/* <ExpenseForm/> */}
            {/* <WeekSetting/> */}
            <ExpenseList/>
        </div>

    </section>
    </BudgetProvider>
    
  )
}
