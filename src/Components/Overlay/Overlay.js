import React from 'react'
import './Overlay.css'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'


const Overlay = ({children}) => {
  return (
    <div className='overlayContainer'>
     <div className='NavbarDiv'>
      <Navbar/>
     </div>

     {children}



    </div>
  )
}

export default Overlay