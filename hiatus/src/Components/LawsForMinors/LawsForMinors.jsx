import React, {useEffect, useState} from 'react'

const LawsForMinors = ({laws}) => {

  const [policies, setPolicies] = useState() 

const policyFilter = () => {
  const policy = {}

  if(laws.below_age){
    policy.below_age=`Restrictions apply for those under the age of ${laws.below_age}`
  } else {
    policy.below_age="No restrictions on minors' abortions currently being enforced"
  }
  
  if(laws.parental_consent_required){
    policy.parentalConsent="Parent must give permission for the minor to have an abortion"
  } else {
    policy.parentalConsent="No parental consent required"
  }

  if(laws.parental_notification_required){
    policy.parentalNotification="Parental notification is required before of the minor's decision to have an abortion."
  } else {
    policy.parentalNotification="No parental notification is required"
  }

  if(laws.parents_required){
    if(laws.parents_required === 1){
      policy.parentRequired = "One parent or guardian must be notified"
    } else {
      policy.parentRequired = "Both parents or guardian must be notified"
    }
  } else {
    policy.parentRequired = "No restrictions on minor's abortions"
  }

  if(laws.judicial_bypass_available){
    policy.judicialBypass = 'A judge can excuse a minor from the required parental consent and/or notification'
  } else {
    policy.judicialBypass = 'No judicial bypass available'
  }

  if(laws.allows_minor_to_consent){
    policy.minorConsent='Minors can consent to an abortion'
  } else {
    policy.minorConsent='Minors cannot consent to an abortion'
  }

  return policy
}

useEffect(() => {
  const filteredPolicies = policyFilter()
  setPolicies(filteredPolicies)
}, [])

  return (
    <div className='laws-for-minors'>
        <h2>Laws and Polices Pertaining to Minors</h2>
        {/* {laws.below_age
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
        } */}
        {policies
        ?
        <>
        <p>{policies.below_age}</p>
        <p>{policies.parentalConsent}</p>
        <p>{policies.parentalNotification}</p>
        <p>{policies.parentRequired}</p>
        <p>{policies.judicialBypass}</p>
        <p>{policies.minorConsent}</p>
        
        </>
        : <p>loading</p>
        }
    </div>
  )
}

export default LawsForMinors