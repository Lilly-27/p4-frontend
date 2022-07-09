import React, { useState } from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

const MapWrapper = ({ mapCenter, clinics}) => {
  const [selected, setSelected] = useState({})

  const onSelect = (item) => {
    console.log(item)
  }

  mapCenter = {mapCenter}
  
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerClassName='map-class' zoom={11} center={mapCenter}>
            
        </GoogleMap>
    </LoadScript>
  )
}

export default MapWrapper