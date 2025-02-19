import React, { useContext } from 'react';
import { BudgetContext } from '../../context/BudgetProvider';
import { ExpenseForm } from './ExpenseForm';
import { MdDelete } from "react-icons/md";

export const ExpenseList = () => {

const {allExpense,setAllExpense,pageinfo}=useContext(BudgetContext);
const {fund,setFund}=useContext(BudgetContext);
    let am=0;
    const totalAm=allExpense.forEach((ex)=>(am+=Number(ex.amount)))
    const handleDelete=(i)=>{
      const updatedafterDeleted=allExpense.filter((exp,index)=>i!==index);
      const deletedItem=allExpense.filter((exp,index)=>i===index);
      setAllExpense(updatedafterDeleted)
      setFund(Number(fund)+Number(deletedItem[0].amount))
      console.log(deletedItem[0])
    }


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
                  <div className='flex items-center  justify-between'>
                  <h3 className='text-gray-800 text-sm mt-2'>
                        {exp.description}
                    </h3>
                    <button onClick={()=>handleDelete(i)}>
                    <MdDelete className='text-2xl' />
                    </button>
                  </div>
                </div>
            ))
          }
        </div>
    </div>
    </>
  )
}
