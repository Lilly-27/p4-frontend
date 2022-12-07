import React from 'react'
import About from '../About/About'
import Stories from '../Stories/Stories'
import Resources from '../Resources/Resources'
import Donate from '../Donate/Donate'
import InteractiveMap from '../../Components/InteractiveMap/InteractiveMap'

import { useParams } from 'react-router'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'


const LandingPage = () => {
  const loc = window.location.href

  useEffect(() => {
    const index = loc.match(/(#)([A-Z | a-z]+)/)
    setTimeout(() => {
      document.querySelector(index[0]).scrollIntoView({behavior: 'smooth', block: 'start'})
    },1000)
  }, [loc])

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