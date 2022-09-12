import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import {
    GoogleMap,
    LoadScript,
    Marker,
} from '@react-google-maps/api'
import markerIcon  from '../../assets/welfareroom.png'

const MapWrapper = ({ center, clinicData }) => {
  let navigate = useNavigate()
  
  //Must pass center and zoom data into component from rest call
  const stateMapData = {
    Illinois: {
      state_center: {lat: 40.0000000, lng: -89.0000000},
      zoom: 7.46
    }
  }

  const latLongs = clinicData.map((clinic) => {
    return {
      id: clinic.address.state,
      _id: clinic._id,
      name: clinic.name,
      location: {lat: Number(clinic.latlong.latitude), lng: Number(clinic.latlong.longitude)}
    }
  })

  const onSelect = (item) => {
    navigate(`/clinics/${item._id}`)
  }

  const mapStyles = {
    height: '100%',
    width: '100%',
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerClassName='map-class' zoom={7.46} center={center} mapContainerStyle={mapStyles}>
          {latLongs.map((item, key) => {
          return (
            <Marker
              key={key}
              position={item.location}
              onClick={() => onSelect(item)}
              icon={markerIcon}
            ></Marker>
          );
        })}
        </GoogleMap>
    </LoadScript>
  )
}
export default MapWrapper
