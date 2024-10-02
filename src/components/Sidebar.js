import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse }  from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const isMenuOpen  = useSelector(store => store.app.isMenuOpen);
  // Early return Pattern
  if(!isMenuOpen) return null;
  return (
    <div className='p-10 shadow-lg w-60'>
      <section>
        <ul>
          <li className='font-bold'>
          <FontAwesomeIcon icon={faHouse} /> Home
          </li>
          <li className='font-bold'>
             Shorts
          </li>
          <li className='font-bold'>
            Subscriptions
          </li>
        </ul>
      </section>
      <section className='pt-4'>
        <h1 className='font-bold'>You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Downloads</li>
        </ul>
      </section>
      <section className='pt-4'>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>India TV</li>
          <li>StudyIQ IAS</li>
          <li>Namaste JavaScript</li>
          <li>Love Babber</li>
          
        </ul>
      </section>
      <section  className='pt-4'>
        <h1 className='font-bold'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
      </section>
    </div>
  )
}

export default Sidebar