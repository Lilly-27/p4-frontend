import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
    MarkerClusterer,
} from '@react-google-maps/api'

const MapWrapper = ({ stateName }) => {

  //Data structure will zooms and center points for all states
  const stateMapData = {
    Illinois: {
      state_center: {lat: 40.0000000, lng: -89.0000000},
      zoom: 7.46
    }
  }
  const [selected, setSelected] = useState({})
  const [clinic, setClinics] = useState([])

  const onSelect = (item) => {
    console.log(item)
  }

  const mapStyles = {
    height: '100%',
    width: '100%',
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT_PROD}clinics/state/${stateName}`)
    .then(res => res.json())
    .then(data => {
      setClinics(data)
    })
    .catch(console.error)
  },[])

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerClassName='map-class' zoom={stateMapData[stateName].zoom} center={stateMapData[stateName].state_center} mapContainerStyle={mapStyles}>
          {clinic && 
          <>
          P
            {
            clinic.map((item, key) => {
              console.log(item.latlong, "item",)
            return(
                <Marker
                key={key}
                postition={item.latlong}
                onClick={()=> onSelect(item)}>

                </Marker>
              )
            })}
          </>
          }
        </GoogleMap>
    </LoadScript>
  )
}

export default MapWrapper