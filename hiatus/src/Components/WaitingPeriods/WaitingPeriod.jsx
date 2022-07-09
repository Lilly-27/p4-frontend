import React from 'react'

const WaitingPeriod = ({waiting}) => {
  return (
    <div className='waiting-period'>
        <h2>Waiting Periods</h2>
        {waiting.waiting_period_hours
        ? <p>You must wait {waiting.waiting_period_hours} hours        ***need better info on this not final***</p>
        :<p>No data on waiting period hours</p>
        }
        {waiting.counseling_visits
        ?<p>You must attend {waiting.counseling_visits} counseling visits</p>
        : <p>No data on counseling_visits</p>  
        }
        {waiting.exception_health
        ?<p>There is an exception for health: {waiting.exception_health}</p>
        :<p>No Exceptions for health</p>
        }
        {waiting.waiting_period_notes && <p>Additional Notes: {waiting.waiting_period_notes}</p>}
        
    </div>
  )
}

export default WaitingPeriod