import React, { useState } from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

const MapWrapper = ({ clinics }) => {
  const [selected, setSelected] = useState({})

  const onSelect = (item) => {
    console.log(item)
  }

  const centerAS = {
    lat: 44.409286,
    lng: -68.247501,
}

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerClassName='map-class' zoom={11} center={centerAS}>

        </GoogleMap>
    </LoadScript>
  )
}

export default MapWrapper