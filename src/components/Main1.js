import React from 'react';
import './Main1.css';
import pic from '../images/phone.png';

const Main1 = () => {
  return (
    <div className='Main'>
    <div className='cain'>
    <div className='Left'>
        <h1>Community <br/> powered</h1>
        <p>Imgur is the easiest way to discover and enjoy the magic of the Internet. It’s where you’ll find the funniest, most informative and inspiring images, memes, GIFs, and visual stories served up in an endless stream of bite-sized fun. Powered by a passionate community of people from all around the world, anyone can join to share cool stuff and vote the best to the top.

        You’ll always find something on Imgur to make you smile and brighten your day.</p>
    </div>
    <div className='Right'>
        <img src={pic} alt={'phone'} />
    </div>
    </div>
    </div>
    
  )
}

export default Main1