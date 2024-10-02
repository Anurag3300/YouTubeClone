import React from 'react'

const Videos = ({info}) => {
    const {snippet , statistics} = info;
  return (
    <div className='w-96 h-96 rounded-lg p-2 px-2 m-2 shadow-md'>
        <img className=" rounded-lg"alt='thumbnail' src={snippet?.thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold m-2'>{snippet?.title}</li>
            <li className='font-bold'>{snippet?.channelTitle}</li>
            <li>{statistics?.viewCount}View</li>
          
        </ul> 
    </div>
  )
}

export default Videos