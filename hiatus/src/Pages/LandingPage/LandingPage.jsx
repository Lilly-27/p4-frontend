import React from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Stories from '../Stories/Stories'
import Resources from '../Resources/Resources'
import Donate from '../Donate/Donate'
import Footer from '../Footer/Footer'
import MapWrapper from '../../Components/Map/MapWrapper'


const LandingPage = () => {
  return (
    <div>
      
      <About />
      <Stories />
      <Resources />
      <Donate />
      
    </div>
  )
}

export default LandingPage