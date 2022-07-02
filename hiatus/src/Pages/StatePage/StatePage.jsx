import React from 'react'

const StatePage = () => {
  return (
    <div className="state-page-main-container.css">
        <div className='text-container'>
            {/* State name will need data passed in */}
            <div className='gestational-limits'>
            <h2>StateName</h2>
            <p>Abortion in **statename** is banned **banned_after_weeks_since_LMP**</p>
            <h3>Exceptions</h3>
            {/* Exception Logic */}
            </div>
            <div className='insurance-coverage'>
                <h3>Insurance Coverage</h3>
                {/* Insurance Logic */}
            </div>
            <div className='waiting-period'>
                <h3>Waiting Period</h3>
                {/* waiting period logic */}
            </div>
            <div className='minor-laws'>
                <h3>Laws Pertaing To Minors</h3>
                {/* minor logic */}
            </div>
        </div>
        <div className='component-container'>
            {/* TODOgoogle maps */}
            {/* TODO list of clinics */}
            {/* list of organizations */}
        </div>
    </div>
  )
}

export default StatePage