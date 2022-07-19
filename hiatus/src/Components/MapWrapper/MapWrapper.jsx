import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
    MarkerClusterer,
} from '@react-google-maps/api'
import markerIcon  from '../../assets/welfareroom.png'

const MapWrapper = ({ stateName, clinicData }) => {

  const [center, setCenter] = useState()

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
      name: clinic.name,
      location: {lat: Number(clinic.latlong.latitude), lng: Number(clinic.latlong.longitude)}
    }
  })
  const onSelect = (item) => {
    console.log(item)
  }

  const mapStyles = {
    height: '100%',
    width: '100%',
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerClassName='map-class' zoom={7.46} center={{lat: 40.0000000, lng: -89.0000000}} mapContainerStyle={mapStyles}>
          {latLongs.map((item, key) => {
          return (
            <Marker
              key={key}
              position={item.location}
              onClick={() => onSelect(item)}
              // icon = 'https://cdn1.iconfinder.com/data/icons/map-objects/154/map-object-tree-park-forest-point-place-512.png'
            ></Marker>
          );
        })}
        </GoogleMap>
    </LoadScript>
  )
}

export default MapWrapper;







// import {
//     GoogleMap,
//     LoadScript,
//     Marker,
//     InfoWindow,
// } from '@react-google-maps/api'

// const MapWrapper = ({ clinics }) => {
//   const [selected, setSelected] = useState({})

//   const onSelect = (item) => {
//     console.log(item)
//   }

//   const centerAS = {
//     lat: 44.409286,
//     lng: -68.247501,
// }

//   return (
//     <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//         <GoogleMap mapContainerClassName='map-class' zoom={11} center={centerAS}>

//         </GoogleMap>
//     </LoadScript>
//   )
// }

// export default MapWrapper