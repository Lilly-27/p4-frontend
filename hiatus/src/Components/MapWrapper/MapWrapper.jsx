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
            ></Marker>
          );
        })}
        </GoogleMap>
    </LoadScript>
  )
}
export default MapWrapper
// import "./MapWrapper.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import * as React from "react";
// import { useState, useEffect, useRef } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";

// import "@tomtom-international/web-sdk-maps/dist/maps.css";
// import * as tt from "@tomtom-international/web-sdk-maps";

// const MAX_ZOOM = 17;

// function MapWrapper() {
//   const mapElement = useRef();
//   const [mapLongitude, setMapLongitude] = useState(-91.10634);
//   const [mapLatitude, setMapLatitude] = useState(40.41346);
//   const [mapZoom, setMapZoom] = useState(3);
//   const [map, setMap] = useState({});

//   const increaseZoom = () => {
//     if (mapZoom < MAX_ZOOM) {
//       setMapZoom(mapZoom + 1);
//     }
//   };

//   const decreaseZoom = () => {
//     if (mapZoom > 1) {
//       setMapZoom(mapZoom - 1);
//     }
//   };

//   const updateMap = () => {
//     map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
//     map.setZoom(mapZoom);
//   };

//   useEffect(() => {
//     let map = tt.map({
//       key: "7PC8rj1glcpHiCDxRtbaxAlo2uPvgS6O",
//       container: mapElement.current,
//       center: [mapLongitude, mapLatitude],
//       zoom: mapZoom
//     });
//     setMap(map);
//     return () => map.remove();
//   }, []);

//   return (
//     <div className="App">
//       <Container className="mapContainer">
//         <Row>
//           <Col xs="4">
//             <h4>Map Controls</h4>
//             <FormGroup>
//               <Label for="longitude">Longitude</Label>
//               <Input
//                 type="text"
//                 name="longitude"
//                 value={mapLongitude}
//                 onChange={(e) => setMapLongitude(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="latitude">Latitude</Label>
//               <Input
//                 type="text"
//                 name="latitude"
//                 value={mapLatitude}
//                 onChange={(e) => setMapLatitude(e.target.value)}
//               />
//             </FormGroup>
//             <Col xs="12">
//               <Row>Zoom</Row>
//               <Row>
//                 <Button outline color="primary" onClick={decreaseZoom}>
//                   -
//                 </Button>
//                 <div className="mapZoomDisplay">{mapZoom}</div>
//                 <Button outline color="primary" onClick={increaseZoom}>
//                   +
//                 </Button>
//               </Row>
//             </Col>
//             <Col xs="12">
//               <Row className="updateButton">
//                 <Button color="primary" onClick={updateMap}>
//                   Update Map
//                 </Button>
//               </Row>
//             </Col>
//           </Col>
//           <Col xs="8">
//             <div ref={mapElement} className="mapDiv" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default MapWrapper;







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
