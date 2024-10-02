import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const listButton = ["All","Music","Live","T-Series","Data Structure","Computer Programming",
    "Mixes","Cricket"];
  return (
    <div className='flex'>
    {
      listButton.map((Button,index)=><Buttons key={index} name={Button}/>)
    }
    </div>
  )
}

export default ButtonList