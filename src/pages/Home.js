import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='first-section' id='home'>
        <div>
          <div className='text-container'>
            <span className='text'>Hi, My name is</span> <br/>
            <span className='text-name'>Tanakrit</span> <br/>
            <span className='text-name'>Promwungkwa</span>
          </div>
          <button>Click Me!</button>
        </div>
        <div>
          <img className='arrow' src='images/up-arrow.png' alt='arrow'></img>
          <img className='photo-of-me' src='images/Untitled2.png' alt='photo of me'></img>
        </div>
      </div>
    </>
  )
}

export default Home