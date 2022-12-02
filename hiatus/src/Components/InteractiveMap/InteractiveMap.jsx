import React, { useEffect, useState } from 'react';
import SvgMap from './SvgMap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const svgString = process.env.NODE_ENV === 'production'
? process.env.REACT_APP_PROG_SVG
: 'http://localhost:4000/svg/getSVGs'

function InteractiveMap() {
  // let navigate = useNavigate()
  const [svgData, setSvgData] = useState()
  
  const getSVG = (url) => {
    axios.get(svgString)
    .then((res) => setSvgData(res.data))
    .catch((err) => console.error(err))
  }

  useEffect(() => {
    getSVG()
  },[])
 
  return (
     <SvgMap svgData={svgData}/>
  )      
}

export default InteractiveMap