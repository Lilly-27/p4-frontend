import React from 'react'

const LawsForMinors = ({laws}) => {
  return (
    <div className='laws-for-minors'>
        <h2>Laws and Polices Pertaining to Minors</h2>
        {laws.below_age
        ? <p>Below age field is present {laws.below_age}</p>
        : <p>No age limits</p>
        }
        {laws.parental_consent_required
        ? <p>Parental consent is required</p>
        : <p>Parental consent is not required</p>
        }
        {laws.parental_notification_required
        ? <p>Parental notification is required</p>
        : <p>Parental notification is not required</p>
        }
        {laws.parents_required
        ? <p>NEED MORE INFO</p>
        : <p>Parents are not required</p>
        }
        {laws.judicial_bypass_available
        ? <p>Judicial bypass available</p>
        : <p>Judicial bypass not available</p>
        }
        {laws.allows_minor_to_consent
        ? <p>Allows minors to consent</p>
        : <p>Does not all minors to consent</p>
        }
    </div>
  )
}

export default LawsForMinors