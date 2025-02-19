import React from 'react'

export const WeekDisplay = (props) => {
    // console.log(props)
  return (
    <div className='sm:w-1/2 bg-emerald-400  border rounded-lg shadow-sm text-center'>
      <div className='text-3xl font-semibold'>
        {props.type} Data
      </div>
      <div className='flex text-lg font-semibold gap-4 justify-between  p-2 overflow-hidden'>
          <p className='w-1/3'>
            Amount
          </p>
          <p className='w-1/3'>
            Category
          </p>
          <p className='w-1/3'>
            Description
          </p>
        </div>
    {
      props.data.map((d,i)=>(
        <div key={i} className='flex border items-center gap-4 justify-between  p-2'>
            <p className='w-1/3'>
            {d.amount}
          </p>
          <p className='w-1/3'>
            {d.category}
          </p>
          <p className='w-1/3'>
            {d.description}
          </p>
        </div>
      ))
    }
</div>
  )
}
