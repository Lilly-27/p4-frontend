import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Annotation} from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';



const svgString = process.env.NODE_ENV === 'production'
? process.env.REACT_APP_PROG_SVG
: 'http://localhost:4000/svg/getSVGs'

const geoURL = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json'
const width = 1300

const SvgMap = ({svgData}) => {
  const navigate = useNavigate()

  const findFill = (stateName) => {
    for(let i = 0; i < svgData.length; i++){
      if(stateName === svgData[i].state){
        return svgData[i].fill
      }
    }
  }

  const clicked = (e) => {
    e.preventDefault()
    navigate(`/states/${e.target.dataset.name}`)
  }

  return (
    svgData !== null
    ? <ComposableMap
    projection="geoAlbers"
    width={width}
    height={500}
    >
      <Geographies geography={geoURL}>
        {({geographies}) =>
          geographies.map((geo, i) => {
            const stateName = geo.properties.name
            const fill = findFill(stateName)

            return <Geography key={geo.rsmKey} geography={geo} fill={fill} stroke='#ffffff' onClick={clicked} data-name={stateName}/> 
        })
      
        }
      </Geographies>
    </ComposableMap>
    :<h1>Loading</h1>
  )
}

export default SvgMap