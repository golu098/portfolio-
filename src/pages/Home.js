import React from 'react'
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className='poster-main'>
        <div className='poster-img'>
        <img src='https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-person-hand-reaching-for-gold-coins-on-black-background-image_2650070.jpg'alt='poster'/>
      </div>
      </div>
      <div className='flex flex-row'>
        <div className='basis-1/2'>
          <p>You Give me Idea</p>
          <p>I Will Give You Products(Applications) </p>
        </div>
        <div className='basis-1/2'>
<img src="https://i.pinimg.com/originals/e7/f0/96/e7f096dd0f8c3d3841b7259aa8b008c4.gif" alt="hand"/>
        </div>
      </div>
    </div>
  )
}

export default Home;