import React from 'react'

export const WeekDisplay = (props) => {
    // console.log(props)
  return (
    <div className='sm:w-1/2 bg-emerald-400  border rounded-lg shadow-sm text-center'>
      <div className='text-3xl font-semibold'>
        {props.type} Data
      </div>
      <div className='flex text-lg font-semibold gap-4 justify-between flex-wrap p-2 overflow-hidden'>
          <p>
            Amount
          </p>
          <p>
            Category
          </p>
          <p>
            Description
          </p>
        </div>
    {
      props.data.map((d,i)=>(
        <div key={i} className='flex border items-center gap-4 justify-between flex-wrap overflow-auto p-2'>
          <p>
            {d.amount}
          </p>
          <p>
            {d.category}
          </p>
          <p>
            {d.description}
          </p>
        </div>
      ))
    }
</div>
  )
}
