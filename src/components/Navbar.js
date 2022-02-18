import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='NavMenu'>
    <div className='Nav'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/more">More</a></li>
        </ul>

    </div>
    </div>
  )
}

export default Navbar