import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Button } from 'reactstrap'
import './Clinics.css'

const Clinics = () => {
  
  const {clinicID} = useParams()
  const [clinicData, setClinicData] = useState()

  const fetchClinic = () => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT_PROD}clinics/id/${clinicID}`)
    // .then((res) => console.log(res))
    .then((res) => setClinicData(res.data))
    .catch(console.error)
  }

  useEffect(() => {
    fetchClinic()
  },[])
  
  return (
    <>
    {clinicData
    ?<> <h1>{clinicData.name}</h1>
    <div className='clinic-page'>
        <div className="clinic-grid">
          <div className="clinic-address-container">
            <h2>Address</h2>
            <p><b>Address: </b>{clinicData.address.PO}</p>
            <p><b>City: </b>{clinicData.address.city}</p>
            <p><b>State: </b>{clinicData.address.state}</p>
            <p><b>Zip: </b>{clinicData.address.zipcode}</p>
          </div>
          <div className='clinic-services-container'>
            <h2>Services</h2>
            <ul>
            {clinicData.services.map((service) => {
              return <li>{service}</li>
            })}
            </ul>
          </div>
          <div className='clinic-hours-container'>
            <h2>Hours</h2>
            <ul>
              <li>Monday: {clinicData.hours.Monday}</li>
              <li>Tuesday: {clinicData.hours.Tuesday}</li>
              <li>Wednesday: {clinicData.hours.Wednesday}</li>
              <li>Thursday: {clinicData.hours.Thursday}</li>
              <li>Friday: {clinicData.hours.Friday}</li>
              <li>Saturday: {clinicData.hours.Saturday}</li>
              <li>Sunday: {clinicData.hours.Sunday}</li>
            </ul>
          </div>
          <div className='clinic-contact-container'>
            <h2>Contacts</h2>
            <p>Phone Number: {clinicData.phone}</p>
            
            <Button><a href={clinicData.website}>Link to there site</a></Button>
          </div>
        </div>
      </div></>
    :<p>Loading</p>}
    </>
  )
}

export default Clinics