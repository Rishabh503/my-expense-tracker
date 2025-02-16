import React from 'react'
import { ShownCurrentWeek } from '../components/shownExpenese/ShownCurrentWeek'
import { ShownList } from '../components/shownExpenese/ShownList'
import { ShownBudgetProvider } from '../context/ShownBudgetProvider'
export const ShownExpenses = () => {
  return (
    <ShownBudgetProvider>
        <section className='min-h-screen w-full bg-red-50'>
                <div className='sm:p-10 p-2 flex flex-col gap-4'>
          
                    <ShownCurrentWeek/>
                    {/* <ExpenseForm/> */}
                    {/* <WeekSetting/> */}
                  <ShownList/>
                </div>
        
            </section>
    </ShownBudgetProvider>
  )
}
