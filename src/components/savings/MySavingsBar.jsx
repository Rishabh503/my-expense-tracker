import React, { useEffect, useState } from 'react'

const MySavingsBar = () => {

  const savings=JSON.parse(Number(localStorage.getItem('savings'))) || 0;
  const [allSavings,setallSavings]=useState(savings)

  useEffect(()=>{
    localStorage.setItem('savings',allSavings)
  },[allSavings])
  const [add,setAdd]=useState(0)
  const [lastAdded,setLastAdded]=useState('')

  const [sub,setSub]=useState(0)
  const [lastSubtracted, setLastSubtracted] = useState('')
  const handleAdd=(e)=>{
    e.preventDefault();
   
    setallSavings(Number(allSavings)+Number(add));
    setLastAdded(add);
 
  }
  const handleSub=(e)=>{
    e.preventDefault();
    setallSavings(Number(allSavings)-Number(sub));
    setLastSubtracted(sub)
  }


  return (
    <div className=' w-full p-10 sm:flex-row flex flex-col gap-10 justify-normal bg-white'>
         <div className='bg-cyan-100 sm:w-1/3 w-full h-auto p-4 rounded-md'>
            <h1 className='text-cyan-500 text-xl'>Life Savings</h1>
            <p className='text-4xl font-cyan text-cyan-800'>
                {allSavings}
            </p>
            <p className='text-gray-500'> Last added amount was : <span className='font-bold text-lg'>{lastAdded}</span> </p>
            <p className='text-gray-500'> Last Withdrawl Amount was : <span className='font-bold text-lg'>{lastSubtracted}
              </span> </p>
            </div>
         <div className='flex sm:w-2/3 gap-5'>
           <form onSubmit={(e)=>{handleAdd(e)}} className='bg-amber-100 flex flex-col gap-5 items-center w-1/2 sm:w-full  h-auto p-4 rounded-md'>
            <h1 className='text-amber-500 text-start font-bold text-2xl'>Add Savings</h1>
            <input className='w-full' value={add} placeholder='add a amount'
             onChange={(e)=>{setAdd(e.target.value)}} type="number" />
            <button className='text-xl border px-6 rounded-lg bg-amber-400 font-cyan text-amber-800'>
                Add
            </button>
            </form>
            <form onSubmit={(e)=>{handleSub(e)}} className='bg-pink-100 flex flex-col gap-5 items-center sm:w-full w-1/2 h-auto p-4 rounded-md'>
            <h1 className='text-pink-500 text-start font-bold text-2xl'>WithDraw Savings</h1>
            <input className='w-full' value={sub} placeholder='add a amount to withdraw'
             onChange={(e)=>{setSub(e.target.value)}} type="number" />
            <button className='text-xl border px-6 rounded-lg bg-pink-400 font-cyan text-pink-800'>
                Sub
            </button>
            </form>
           </div>
    </div>
  )
}

export default MySavingsBar