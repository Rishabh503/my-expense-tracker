import React from 'react'
import { BudgetProvider } from '../context/BudgetProvider'
import { CurrentWeek } from '../components/CurrentWeek'
import { ExpenseList } from '../components/ExpenseList'
import { ShownCurrentWeek } from '../components/ShownCurrentWeek'
import { ShownBudgetProvider } from '../context/ShownBudgetProvider'
import ShownWeekSetting from '../components/ShownWeekSetting'
import { ShownList } from '../components/ShownList'
export const ShownExpenses = () => {
  return (
    <ShownBudgetProvider>
        <section className='min-h-screen w-full bg-green-50'>
                <div className='p-10'>
          
                    <ShownCurrentWeek/>
                    {/* <ExpenseForm/> */}
                    {/* <WeekSetting/> */}
                  <ShownList/>
                </div>
        
            </section>
    </ShownBudgetProvider>
  )
}
