import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-400 rounded-md w-60'>{name}</button>
    </div>
  )
}

export default Buttons