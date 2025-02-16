import React from 'react'

export const WeekDisplay = (props) => {
    console.log(props)
  return (
    <div className='w-1/2 border text-center'>
    {
      props.data.map((d,i)=>(
        <div className='flex gap-4 justify-normal p-2'>
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
