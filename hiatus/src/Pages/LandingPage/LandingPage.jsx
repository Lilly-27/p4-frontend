import React from 'react'
import About from '../About/About'
import Stories from '../Stories/Stories'
import Resources from '../Resources/Resources'
import Donate from '../Donate/Donate'
import InteractiveMap from '../../Components/InteractiveMap/InteractiveMap'


const LandingPage = () => {
  return (
    <div id="landing-page">
      <About />
      <InteractiveMap />
      <Resources />
      <Stories />
    </div>
  )
}

export default LandingPage