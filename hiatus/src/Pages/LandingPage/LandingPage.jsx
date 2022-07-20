import React from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Stories from '../Stories/Stories'
import Resources from '../Resources/Resources'
import Donate from '../Donate/Donate'
import Footer from '../Footer/Footer'
import InteractiveMap from '../../Components/InteractiveMap/InteractiveMap'
import Carousel from 'react-bootstrap/Carousel';


const LandingPage = () => {
  return (
    <div id="landing-page">
      <About />
      <InteractiveMap />
      <Stories />
      <Resources />
      <Donate />
      
    </div>
  )
}

export default LandingPage