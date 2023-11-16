import React from 'react'
import "./home.css";
const Home = () => {
  return (
    <div>
      <p className='welcome-text'>
        Welcome to Dev Wonderland!
 </p>
    <div className='welcome-gif'>
      <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmF4ZzE3dnJqcGtjYWNjM3FlNzVqeXdldGdpcGZqenhqYTVnMG91MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pUOtybrPsOXhKx5SKJ/giphy.gif' alt="img"/>
      {/* <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZibDEyNzkzZDVpbmxzemMxMDB1YjNvZnRkbDEzanQyNDF5aXR0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K77lWFobBeX5xcLsdp/giphy.gif" alt="img"/> */}
      </div>

    </div>
  )
}

export default Home;