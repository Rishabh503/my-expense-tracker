import React, { useContext } from 'react';
import { BudgetContext } from '../../context/BudgetProvider';
import { ExpenseForm } from './ExpenseForm';

export const ExpenseList = () => {
    //isko milna chaiye ek naya expense to add
//     const [allExpense, setAllExpense] = useState([{
//         amount:"10",
//         category:"rishabh",
//         description:"trial mode",
//     }
// ])
const {allExpense,setAllExpense,pageinfo}=useContext(BudgetContext);
// const ALLData=useContext(BudgetContext)/
// console.log(pageinfo)
    let am=0;
    const totalAm=allExpense.forEach((ex)=>(am+=Number(ex.amount)))
    // console.log(am)

const {fund,setFund}=useContext(BudgetContext);
  return (
    <>
    <div className='sm:w-2/3 '>
    <ExpenseForm expenseDataHandle={setAllExpense} expenseData={allExpense} fund={fund} setFund={setFund} />
    </div>
    <div className='p-10 w-full border items-center    gap-5 justify-between rounded-2xl bg-white '>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-2xl inline-flex items-center text-center gap-2'>{pageinfo} Expense</h1>
            <p className='font-bold text-green-700 text-2xl inline-flex items-center text-center gap-2'>{am}</p>
        </div>
        <div className='p-5 flex flex-col gap-5'>
          {
            allExpense.map((exp,i)=>(
                <div key={i} className='bg-white shadow-md border rounded-md p-2'>
                  <div className='flex items-center  gap-2'>
                  <h1 className='font-semibold  text-2xl'>
                        {exp.amount}
                    </h1>
                    <h1 className='font rounded-lg px-2 py-1 bg-red-100 text-xs'>
                        {exp.category}
                    </h1>
                  </div>
                  <h3 className='text-gray-800 text-sm mt-2'>
                        {exp.description}
                    </h3>
                </div>
            ))
          }
        </div>
    </div>
    </>
  )
}
