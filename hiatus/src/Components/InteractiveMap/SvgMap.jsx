import React, { useEffect, useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps';
import getSVGs from '../../Hooks/GetSVGData';

const geoURL = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json'
const width = 1100

const SvgMap = () => {

    const svgData = useMemo(() => getSVGs()) 
    // const svgData = getSVGs()
    console.log(svgData)

    const findFill = (geo) => {
      if(svgData !== null){
        const matchingState = svgData.find((element, index) => {
          return element.state === geo.properties.name
        })

        const fill = matchingState["fill"]
        // console.log(fill)
      
        return fill
    }
  }

  return (
    <ComposableMap
    projection="geoAlbers"
    width={width}
    height={500}
    // projectionConfig={{
    //   center: [100, 100]
    // }}
    >
      <Geographies geography={geoURL}
      parseGeographies={(geos) =>{
        return geos.map((g) => {
          const fill = findFill(g)
          console.log(fill)
          g.properties.fill = fill
          return g
        })
      }}>
        {({geographies}) =>
          geographies.map((geo) => (
            <>
            <Geography key={geo.rsmKey} geography={geo} stroke='#ffffff'/>
            
            {/* {geographyRender(geo)} */}
            {/* {console.log(geo)}  */}
            </>   
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export default SvgMap