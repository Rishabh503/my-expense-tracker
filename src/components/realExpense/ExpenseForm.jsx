import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";

export const ExpenseForm=(props)=>{
    // console.log(props)
    
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    // const [oldFund]

    const handleSubmit=(e)=>{

        if(!amount || !category || !description) {alert("fill all"); return }
        e.preventDefault();
        // console.log(amount,category,description);
        props.expenseDataHandle([{
            amount:amount,
            category:category,
            description:description
        },...props.expenseData])
        props.setFund(props.fund-amount)
        setAmount('');setCategory(''),setDescription('')

    }

  return (
    <div className='p-10 w-full border items-center    gap-5 justify-between rounded-2xl bg-white '>
        <form className='flex flex-col gap-5 mt-2'
         onSubmit={(e)=>handleSubmit(e)} >
            <div className='sm:flex gap-5 sm:justify-between items-center '>
            <div className='w-full '>
                <h1 className='text-gray-800 text-xl font-semibold'>Amount</h1>
                <input value={amount} type="number" placeholder='Enter a amount'
                    onChange={(e)=>{setAmount(e.target.value)}}
                    className='border mt-2 w-full  text-xl shadow-md'
                />
            </div>
            <div className='w-full'>
                <h1 className='text-gray-800 text-xl font-semibold'>Category</h1>
                <input  value={category} placeholder='day or date or category' type="text" onChange={(e)=>{setCategory(e.target.value)}} 
            className='border w-full text-xl shadow-md mt-2'/>
            </div>
            </div>
            <div>
                <h1 className='text-gray-800 text-xl font-semibold'>Description</h1>
                <input  value={description} placeholder='Description 🤔' type="text" onChange={(e)=>{setDescription(e.target.value)}} 
            className='border w-full text-xl shadow-md mt-2'/>
            </div>
            <button className='inline-flex items-center justify-center text-xl gap-2
            px-5 py-3 text-white text-center w-full bg-green-600 rounded-lg'>
            <IoMdAddCircleOutline className='mt-1 text-2xl' />  Add Expense
            </button>
        </form>
    </div>
  )
}

// export default ExpenseForm