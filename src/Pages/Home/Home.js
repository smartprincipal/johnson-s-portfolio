import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import Github from '../../Asset/Github.svg'
import Twitter from '../../Asset/twitter.svg'
import Linkedin from '../../Asset/Linkedin.svg'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='section1'>
        <div className='section1Div'>
        <h3 className='section1Head'>
        Hi, I’m Johnson Oluwayemi
        </h3>
        <p className='section1para'>
        I implement user interface design and solve user problems using web technologies. I have 5 years of making products that solve user problems and implementing responsive website.
        </p>
        </div>
        <div>
          <div>
          <a href='www.github.com/smartprincipal'>
          <img src={Github} alt='Githu Logo'/>
          </a>
          </div>
          <div>

          <a href='www.twitter.com/smartprincipal'>
          <img src={Twitter} alt='Twitter Logo'/>
          </a>
          </div>
          <div>
          <a href='www.linkedin.com/smartprincipal'>
          <img src={Linkedin} alt='Linkedin Logo'/>
          </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home