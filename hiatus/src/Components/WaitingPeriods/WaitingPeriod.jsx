import React, {useState, useEffect} from 'react'

const WaitingPeriod = ({waiting, statename}) => {
  const [policies, setPolicies] = useState()
  
  const policyFilter = () => {
    const policy = {}

    if(waiting.waiting_period_hours){
      policy.waitingPeriod=`You must wait ${waiting.waiting_period_hours} between receiving state mandated abortion counseling and obtaining an abortion.`
    } else {
      policy.waitingPeriod='No waiting period is in effect'
    }

    if(waiting.counseling_visits === 1){
      policy.counseling = `Counseling is required by the ${statename}`
    }
    else if(waiting.counseling_visits === 2){
      policy.counseling = 'Abortion counseling or ultrasound must be obtained at the facility before the waiting period begins'
    } else {
      policy.counseling = 'Counseling is not required'
    }

    if(waiting.exception_health){
      policy.healthException = `Counseling requirement can be waived under certain conditions: ${waiting.exception_health}`
    } else {
      policy.healthException = 'No exceptions for counceling'
    }

    if(waiting.waiting_period_notes){
      policy.notes = waiting.waiting_period_notes
    }


    return policy
  }

  useEffect(() => {
    const filteredPolicies = policyFilter()
    setPolicies(filteredPolicies)
  }, [])

  return (
    <div className='waiting-period'>
        {
          policies
          ?
          <>
          <p>{policies.waitingPeriod}<br/>Note that all states waive mandatory wainting period requirements in a medicial emergency</p>
          <p>{policies.counseling}</p>
          <p>{policies.healthException}</p>
          <p>Additional notes pertaining to waiting periods: {policies.notes}</p>
          </>
          :<p>No information on waiting periods for {statename}</p> 
        }
        
    </div>
  )
}

export default WaitingPeriod