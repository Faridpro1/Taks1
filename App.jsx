import React from 'react'
import img1 from "./img/Ellipse2.png";
import img2 from "./img/Ellipse1.png";
import img3 from "./img/Ellipse3.png";
import img4 from "./img/Ellipse4.png";
import "./app.css";
import { BiSearchAlt2 } from 'react-icons/bi';
const App = () => {
  return (
    <div>
      <div className='container'>
        <p className='container-p'>User</p>
        <div className='header'>
          <input type="text" placeholder='       Search user' /><BiSearchAlt2 className='icon' />
          <div className='Header-p' >
            <p>Reputation</p>
            <p>New User</p>
            <p>Voters</p>
            <p>Editors</p>
            <p>Moderators</p>
          </div>
        </div>
      </div>
      <div className='cards'>
      <div className='card1'>
        <img src={img2}alt="" />
        <h3>Lelah Nichols</h3>
        <h4>Troy, MI</h4 >
        <p className='p'>clothes</p>
        <p>stem</p>
      </div>

      <div className='card2'>
        <img src={img1}alt="" />
        <h3>Jesus Weiss</h3>
        <h4>Fort Worth, TX</h4 >
        <p className='p'>gadget</p>
        <p>headset</p>
        <p>speed </p>
      </div>
      <div className='card3'>
        <img src={img3}alt="" />
        <h3>Annie Rice</h3>
        <h4>Austin, TX</h4 >
        <p className='p'>rood</p>
        <p>mountain</p>
        <p>trip </p>
      </div>
      <div className='card4'>
        <img src={img4}alt="" />
        <h3>Robert Brower</h3>
        <h4>Cincinnati, OH</h4 >
        <p className='p'>Maintenance</p>
        <p>gears</p>
        <p>frames</p>
      </div>
      <div className='card5'>
        <img src={img5}alt="" />
        <h3>Amy Campbell</h3>
        <h4>Warrior, AL</h4 >
        <p className='p'>music</p>
        <p>disks</p>
     
      </div>
      </div>
    </div>
  )
}

export default App