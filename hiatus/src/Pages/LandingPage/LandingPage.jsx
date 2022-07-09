import React from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Map from '../Map/Map'
import Stories from '../Stories/Stories'
import Resources from '../Resources/Resources'
import Donate from '../Donate/Donate'
import Footer from '../Footer/Footer'
import StatePage from '../StatePage/StatePage'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <StatePage statename={"62c781796d098a452182184f"}/>
      <About />
      <Map />
      <Stories />
      <Resources />
      <Donate />
      <Footer />

    </div>
  )
}

export default LandingPage