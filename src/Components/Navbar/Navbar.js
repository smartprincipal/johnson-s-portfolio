import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

 const [toggle, setToggle] =useState(false)

 const handleToggle = () =>{
  return setToggle(prevToggle=>!prevToggle)
 }

  return (
    <div className='navBar'>
     <div>
      <Link to='/' className='logoName'>Johnson.</Link>
     </div>
     <div>
      <ul className='menuList'>
       <li className='menuItem'><Link to='/Projects' className='menuItemLink'>Projects</Link></li>
       <li className='menuItem'><Link to='/About' className='menuItemLink'>About Me</Link></li>
       <li className='menuItem'><Link to='/Contact' className='menuItemLink'>Contact Me</Link></li>
      </ul>
     </div>

     {/* Hamburger */}
     <div id='hamburger' onClick={handleToggle}>
      {toggle ? <div>&times;</div> : <div>&#9776;</div>}

     </div>

    </div>
  )
}

export default Navbar