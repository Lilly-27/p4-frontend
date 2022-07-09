import React from 'react'

const GestationalLimits = ({ limits, name }) => {
  return (
    <div className='gestational-limits'>
        <h2>Gestation Limits</h2>
        {limits.banned_after_weeks_since_LMP > 0
        ?<p>Abortion is banned {limits.banned_after_weeks_since_LMP} weeks after **LMP** </p>
        :<p>Abortion is banned in {name}</p>
        }
        <h3>Exceptions</h3>
        {limits.exception_life
        ?<p>There is an exception for life</p>
        :<p>No exception for life</p>
        }
        {limits.exception_health
        ?<p>There is a health exception for {limits.exception_health}</p>
        :<p>No exception for health</p>
        }
        {limits.exception_fetal
        ?<p>There is an fetal exception for {limits.exception_fetal}</p>
        :<p>No exception for fetal health</p>
        }
        {limits.exception_rape_or_incest
        ?<p>There is an exception for RI{/*Work on wording and finding the best way to deliver this info*/}</p>
        :<p>No excetpions for RI</p>
        }
    </div>
  )
}

export default GestationalLimits