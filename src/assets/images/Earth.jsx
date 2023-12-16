import React from 'react'

const Earth = () => {
  return (
      <div className='absolute z-40 left-0 md:left-20 top-20 md:top-28'>
        <img className='w-40 opacity-40 md:opacity-100' src={"/earth.svg"} />
      </div>
  )
}

export default Earth

export const Forest = () => {
  return (
      <div className='absolute bottom-0 hidden md:block w-full h-1/6 md:bottom-0'>
        <img className='w-full opacity-40 md:opacity-100' src={"/svgs/forest.svg"} />
      </div>
  )
}