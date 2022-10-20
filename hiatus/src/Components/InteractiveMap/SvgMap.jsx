import React from 'react'
import USAMap from 'react-usa-map';
import getSVGs from '../../Hooks/GetSVGData'

const SvgMap = () => {

    const svgData = getSVGs()

    const 

    const mapHandler = (event) => {
        console.log(event.target.dataset)
    }

  return (
    <div className='svgMap'>
        <USAMap onClick={mapHandler}></USAMap>
    </div>
  )
}

export default SvgMap