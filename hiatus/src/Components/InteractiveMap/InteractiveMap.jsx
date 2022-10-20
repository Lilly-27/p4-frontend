import React from 'react';
import SvgMap from './SvgMap';
import { useNavigate} from 'react-router-dom';
import {Parser} from 'html-to-react'

// var map = require('./test.html');
// var map = { __html: __html };

const rawHTML =
`<div id="map"></div>`

function InteractiveMap() {
  let navigate = useNavigate()
  
  function onClick (e) {
    e.preventDefault()    
    navigate(`/states/${window.stateNext}`)
  }
  return (
    //  <div id="map" onClick={onClick}> 
    //  {Parser().parse(rawHTML)}
    //  </div>
     <SvgMap/>
  )      
}

export default InteractiveMap