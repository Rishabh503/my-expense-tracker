import React from 'react'
import { FaCalendarWeek } from "react-icons/fa";

export const CurrentWeek = () => {
  return (
    <div className='p-10 w-full border items-center sm:flex   gap-5 justify-between rounded-2xl bg-white '>
        <div>
            <h1 className='font-semibold  text-2xl'>
                Current Week
            </h1>
            <h3 className='text-gray-800 text-xl mt-2'>
                Week info render it 
            </h3>
        </div>
         <div className='mt-4 items-center'>
            <button className='inline-flex items-center justify-center text-xl gap-2
                                   px-5 py-3 text-white text-center w-full bg-green-600 rounded-lg'>
            <FaCalendarWeek  className='mt-1 text-2xl' />  Start New Week
            </button>
         </div>
    </div>
  )
}
