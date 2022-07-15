import React, {useState, useEffect} from 'react'

const GestationalLimits = ({ limits, name }) => {
  
  const [statePolicies, setStatePolicies] = useState()
  //Gestational Limit filter
  const policyFilter = () => {
    const policies = {}

      //Does zero mean it is banned or it is not banned
    if(limits.banned_after_weeks_since_LMP > 0){
      if(limits.banned_after_weeks_since_LMP === 28){
        policies.isBanned = 'Abortions are banned in the third trimester'
      } else if(limits.banned_after_weeks_since_LMP === 99){
        policies.isBanned='Abortions are banned after VIABILITY'
      } else {
        policies.isBanned=`Abortions are banned after ${limits.banned_after_weeks_since_LMP} weeks. Post-implantation: ${limits.banned_after_weeks_since_LMP + 3} weeks. Post-fertilization: ${limits.banned_after_weeks_since_LMP + 2} weeks.`
      }
    } else {
      policies.isBanned=`Abortion is banned`
    }
  
    if(limits.exception_life){
      policies.lifeException="Abortion is not banned if nescessary to save the pregnant person's life"
    } else {
      policies.lifeException="No exception for abortion even if nescessry to save the pregnant person's life"
    }
  
    if(limits.exception_health){
      if(limits.exception_health === "Physical"){
        policies.healthException="Abortion is not banned if necessary to preserve the phsyical(not mental) health of the pregnant person"
      } else if(limits.exception_health === "Major Bodily Function"){
        policies.healthException="Abortion is not banned in the case where a person would suffer 'substantial and irreversible impairment of a major bodily function' which may include mental health"
      } else {
        policies.healthException="Abortion is not banned in the case of any unspecified health condition including mental health"
      }
    } else {
      policies.healthException="No exceptions for abortion if detrimental to the pregnant persons health"
    }

    if(limits.exception_fetal){
      if(limits.exception_fetal === "Serious fetal anomaly"){
        //Better responses will be needed for this
        policies.fetalException="Exceptions may be granted for serious fetal annomolies"
      } else {
        policies.fetalException="Exceptions may be granted for lethal fetal annomolies"
      }
    } else{
      policies.fetalException="No exceptions for abortion in the case of serious or lethal fetal annomolies"
    }

    if(limits.exception_rape_or_incest){
      policies.exceptionRI='Exceptions may be granted in cases of rape or incest'
    } else {
      policies.exceptionRI='No exceptions for abortions in cases of rape or incest'
    }

    return policies
  }

  useEffect(() => {
    const filteredPolicies = policyFilter()
    console.log(filteredPolicies)
    setStatePolicies(filteredPolicies)
  },[])

  
  return (
    <div className='gestational-limits'>
        <h2>Gestation Limits</h2>
        {statePolicies
        ?<>
        <p>{statePolicies.isBanned} in {name}</p>
        <h3>Exceptions</h3>
        <p>{statePolicies.healthException}</p>
        <p>{statePolicies.lifeException}</p>
        <p>{statePolicies.fetalException}</p>
        <p>{statePolicies.exceptionRI}</p>
        </>
        : <p>loading</p>
        }
    </div>
  )
}

export default GestationalLimits