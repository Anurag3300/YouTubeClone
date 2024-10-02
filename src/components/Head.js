import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [showSuggestion,setshowSuggestion] = useState(false);
  // console.log(searchQuery);
  // i have to amke an api call on every key press
  useEffect(()=>{
    const timer =  setTimeout(()=>{getSearchSuggestion()},200);
    return ()=>{
      clearTimeout(timer);
    }

  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5  shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={toggleMenuHandler} className='h-16' alt='hamburger menu' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'/>
           <a href='/'> <img  className="h-16 mx-2"alt='youtube-icon' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'/></a>
        </div>
        <div className='col-span-10  pt-3 text-center'>
            <div>
              <input className='w-1/2 border border-gray-400 p-4 rounded-l-full' type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setshowSuggestion(true)}
                onBlur={()=>setshowSuggestion(false)}
              />
              <button className='border border-gray-400 p-4 px-4 rounded-r-full'><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            { showSuggestion &&<div className='absolute bg-white mx-96 w-[55rem] pr-[45rem] text-left px-10 py-2 rounded-lg shadow-md border border-gray-100'>
              <ul>
                { suggestion.map((s)=><li className='p-1 m-1 text-xl w-[50rem] hover:bg-gray-200  rounded-md ' key={s}> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> {s} </li>)}
              </ul>
            </div>}
        </div>
        <div className='col-span-1'>
            <img  className="h-16"alt='user-icon' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'/>
        </div>
    </div>
  )
}

export default Head