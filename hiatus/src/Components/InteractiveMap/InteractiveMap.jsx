import React from 'react';
import { useNavigate} from 'react-router-dom';
import {Parser} from 'html-to-react'

// var map = require('./test.html');
// var map = { __html: __html };

const rawHTML =
`<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

</head>
<body>
<h1>Access to Abortion by State</h1>
<p>Hover over each state to see where abortion care is accessible legally and safely.</p>
<div id="map"></div>
</body>`

function InteractiveMap() {
  let navigate = useNavigate()
  
  function onClick (e) {
    e.preventDefault()    
    navigate(`/states/${window.stateNext}`)
  }
  return (
     <div id="map" onClick={onClick}> 
     {Parser().parse(rawHTML)}
     </div>
  )      
}

export default InteractiveMap