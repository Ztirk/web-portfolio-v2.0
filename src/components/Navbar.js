import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav-position'>
      <div className='nav-container'>
        <img className='logo' src='logo/z-high-resolution-logo-color-on-transparent-background.png' alt='logo'></img>
        <div className='navbar'>
          <ul>
            <li>
              <a href="#home">Home</a>
              <div className='underline'></div>
            </li>
            <li>
              <a href="#works">Works</a>
              <div className='underline'></div>
            </li>
            <li>
              <a href="#contact">Contact</a>
              <div className='underline'></div>
            </li>
          </ul>
        </div>
        <div className='icon'>
          <ul>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-github"></i>
            </li>
            <li>
              <i class="fa-solid fa-square-envelope"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar