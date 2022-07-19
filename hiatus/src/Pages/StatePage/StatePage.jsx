import React, { useEffect, useState } from 'react'
import GestationalLimits from '../../Components/GestationalLimits/GestationalLimits'
import WaitingPeriod from '../../Components/WaitingPeriods/WaitingPeriod'
import LawsForMinors from '../../Components/LawsForMinors/LawsForMinors'
import InsuracePolicies from '../../Components/Insurance/InsuracePolicies'
import MapWrapper from '../../Components/MapWrapper/MapWrapper'
import { Accordion } from 'react-bootstrap'
import './StatePage.css'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import axios from 'axios'

const StatePage = ({statename}) => {
    const [stateData, setStateData] = useState([])
    const [clinicData, setClinicData] = useState([])
    const fetchAll = () => {
        const stateURL = `${process.env.REACT_APP_API_ENDPOINT_PROD}statepolicy/${statename}`
        const clinicURL = `${process.env.REACT_APP_API_ENDPOINT_PROD}clinics/state/${statename}`
        const getStateData = axios.get(stateURL)
        const getClinicData = axios.get(clinicURL)
        axios.all([getStateData, getClinicData])
        .then(
            axios.spread((...allData) => {
                const stateData = allData[0].data
                const clinicData = allData[1].data
                setStateData(stateData)
                setClinicData(clinicData)
            })
        )
    }
    useEffect(() => {
        fetchAll()
    },[])
  return (
        <div className="state-page-main-container">
            <div className="text-container">
                {stateData ? (
                    <>
                        <h1>{stateData.state}</h1>
                        {/*This section will be a giant conditional to check to see if
                    data members are withing the data. Checks for gestational limits, waiting periods, insurance coverages
                    and laws pertaining to minors will happen at two stages. 1. to check and see if the data field is within
                    the model and 2. to check which fields are within that model object. Potential to make it into its own component
                    due to the number of lines however for now we will work in here
                */}
                        <Accordion defaultActiveKey="0">
                            <AccordionItem eventKey="0">
                                <AccordionHeader><h3>Gestational Limits</h3></AccordionHeader>
                                <AccordionBody>
                                    {stateData["gestational_limits"] ? (
                                        <GestationalLimits
                                            limits={stateData.gestational_limits}
                                            name={stateData.state}
                                        />
                                    ) : (
                                        <p>
                                            No information on gestational limits policy in
                                            {stateData.state}
                                        </p>
                                    )}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="1">
                                <AccordionHeader><h3>Waiting Period</h3></AccordionHeader>
                                <AccordionBody>
                                {stateData.waiting_periods ? (
                            <WaitingPeriod waiting={stateData.waiting_periods} />
                        ) : (
                            <p>No information on waiting periods in {stateData.state}</p>
                        )}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="2">
                                <AccordionHeader><h3>Laws Pertaining To Minors</h3></AccordionHeader>
                                <AccordionBody>{stateData["minors"] ? (
                            <LawsForMinors laws={stateData.minors} />
                        ) : (
                            <p>No information on laws or policies pertaining to minors</p>
                        )}</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="3">
                                <AccordionHeader><h3>Insurance Coverage</h3></AccordionHeader>
                                <AccordionBody>
                                {stateData["insurance_coverage"] ? (
                            <InsuracePolicies insurance={stateData.insurance_coverage} />
                        ) : (
                            <p>No information on insurance coverage policies</p>
                        )}
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </>
                ) : (
                    <p>loading...</p>
                )}
            </div>
            <div className="component-container">
                {clinicData && <MapWrapper stateName={stateData.state} clinicData={clinicData}></MapWrapper>}
                {/* TODO list of clinics */}
                {/* list of organizations */}
            </div>
        </div>
    );
}
export default StatePage