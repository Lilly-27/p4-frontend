import React, { useEffect, useState } from 'react'
import GestationalLimits from '../../Components/GestationalLimits/GestationalLimits'
import WaitingPeriod from '../../Components/WaitingPeriods/WaitingPeriod'
import LawsForMinors from '../../Components/LawsForMinors/LawsForMinors'
import InsuracePolicies from '../../Components/Insurance/InsuracePolicies'
import MapWrapper from '../../Components/Map/MapWrapper'
import './StatePage.css'

const StatePage = ({statename}) => {

    const [stateData, setStateData] = useState()


    useEffect(() => {
        // let endpoint = `${process.env.REACT_APP_API_ENDPOINT_PROD}statepolicy/${statename}`
        let endpoint = 'http://localhost:4000/statepolicy/62c77a93aa69cc46ad4f9242'
        fetch(endpoint)
        .then(res => res.json())
        .then(data => setStateData(data))
        .catch(console.error)
    },[])



  return (
    <div className="state-page-main-container.css">
        <div className='text-container'>
            {
            stateData?
            <>
                <h1>{stateData.state}</h1>
                {/*This section will be a giant conditional to check to see if
                    data members are withing the data. Checks for gestational limits, waiting periods, insurance coverages
                    and laws pertaining to minors will happen at two stages. 1. to check and see if the data field is within
                    the model and 2. to check which fields are within that model object. Potential to make it into its own component
                    due to the number of lines however for now we will work in here
                */}
                {stateData["gestational_limits"]?
                <GestationalLimits limits={stateData.gestational_limits} name={stateData.state}/>
                : <p>No information on gestational limits policy in {stateData.state}</p>
                }
                {stateData['waiting_periods']
                ? <WaitingPeriod waiting={stateData.waiting_periods}/>
                :<p>No information on waiting periods in {stateData.state}</p>
                }
                {stateData['minors']
                ?<LawsForMinors laws={stateData.minors}/>
                :<p>No information on laws or policies pertaining to minors</p>
                }
                {stateData['insurance_coverage']
                ? <InsuracePolicies insurance={stateData.insurance_coverage} />
                :<p>No information on insurance coverage policies</p>
                }

            </>
            : <p>loading...</p>
            }
        </div>
        <div className='component-container'>
            <MapWrapper clinics={"hello"}></MapWrapper>
            {/* TODO list of clinics */}
            {/* list of organizations */}
        </div>
    </div>
  )
}

export default StatePage