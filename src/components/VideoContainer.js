import React, { useState } from 'react';
import { useEffect } from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import Videos from './Videos';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const[videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  // console.log("start");
  // console.log(videos);
  return (
    <div className='flex flex-wrap'>
      {
       videos.map((video)=> (<Link  key={video.id} to={"/watch?v="+video.id}><Videos info={video}/></Link>))
       } 
      {/* <Videos info={videos[4]}/> */}
    </div>
  )
}

export default VideoContainer