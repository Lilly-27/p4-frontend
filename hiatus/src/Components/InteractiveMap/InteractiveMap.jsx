import React from 'react';
import {Parser} from 'html-to-react'

// var map = require('./test.html');
// var map = { __html: __html };

const rawHTML =
`<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<script src="mapdata.js"></script>
<script src="usmap.js"></script>
</head>
<body>
<h1>Access to Abortion by State</h1>
<p>Hover over each state to see where abortion care is accessible legally and safely.</p>
<div id="map"></div>
</body>`

function InteractiveMap() {
    function onClick (e) {
        console.log(e)
    }
  return (
     <div id="map" onClick={onClick}> 
     {Parser().parse(rawHTML)}
     </div>
  )      
}

export default InteractiveMap