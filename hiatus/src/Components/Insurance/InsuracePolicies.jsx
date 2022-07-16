import React, {useState, useEffect} from 'react'

const InsuracePolicies = ({insurance}) => {
  const [policies, setPolicies] = useState()

  const filterPolicies = () => {
    const policy = {}

    if(insurance.requires_coverage){
      policy.requiresCoverage = "Private health plans regulated by the state cover abortions."
    } else {
      policy.requiresCoverage = "Private health planes regulated by the state cover abortions"
    }

    if(insurance.private_coverage_no_restrictions){
      policy.privateCoverageNoRestriction = "Private insurance may cover abortion but is not necessarily required to"
    }

    if(insurance.private_exception_life){
      policy.privateExceptionLife = "Allows for private insurance coverage for cases where abortion is necessary to save the pregnant person's life"
    }

    if(insurance.private_exception_health){
      policy.privateExceptionHealth = "Allows for private insurance coverage for cases when the pregnant person's faces a substantial and irreversible impairment of a major bodily function"
    }

    if(insurance.private_exception_fetal){
      policy.privateExceptionFetal = "Allows for private insurance coverage for cases when the fetus has a lethal fetal anomaly"
    }

    if(insurance.private_exception_rape_or_incest){
      policy.privateExceptionRI = "Allows for private insurance coverage for cases of rape and incest"
    }

    if(insurance.exchange_coverage_no_restrictions){
      policy.exchangeNoRestrictions = "No restrictions for abortion coverage in ACA. Not every plan offered in the exchange will include abortion coverage"
    }

    if(insurance.exchange_exception_life){
      policy.exchangeExceptionLife = "Allows for exchange insurance coverage for cases where abortion is necessary to save the pregnant person's life"
    }

    if(insurance.exchange_exception_health){
      if(insurance.exchange_exception_health === "major bodily function"){
        policy.exchangeExceptionHealth = "Allows for exchange insurance coverage for cases when the pregnant person's faces a substantial and irreversible impairment of a major bodily function"
      }
      if(insurance.exchange_exception_health === "physical"){
        policy.exchangeExceptionHealth = "Allows for exchange insurance coverage for cases when the pregnant person's faces a serious impact on physical health"
      }
    }

    if(insurance.exchange_exception_fetal){
      if(insurance.exchange_exception_fetal === "Lethal fetal anomaly"){
        policy.exchangeExceptionFetal = "Allows for exchange insurance coverage for cases when the fetus has a lethal fetal anomaly"
      }
    }

    if(insurance.exchange_exception_rape_or_incest){
      policy.exchangeExceptionRI = "Allows for exchange insurance coverage for cases of rape and incest"
    }

    if(insurance.exchange_forbids_coverage){
      policy.exchangeForbid = "All exchange insurance coverage for abortion is forbiden"
    }

    if(insurance.medicaid_coverage_provider_patient_decision){
      policy.medicaidPatientDecision = "Your state had a policy in plave to use Medicaid funds to pay for abortion"
    }

    if(insurance.medicaid_exception_life){
      policy.medicaidExceptionLife = "Allows for Medicaid insurance coverage for cases where abortion is necessary to save the pregnant person's life"
    }

    if(insurance.medicaid_exception_health){
      policy.medicaidExceptionHealth = "Allows for Medicaid insurance coverage for cases when the pregnant person's physical health is endangered"
    }

    if(insurance.medicaid_exception_fetal){
      policy.medicaidExceptionFetal = "Allows for Medicaid insurance coverage for cases when the fetus has a serious or lethal fetal anomaly"
    }

    if(insurance.medicaid_exception_rape_or_incest){
      policy.medicaidExceptionRI = "Allows for Medicaid insurance coverage in the case of rape or incest"
    }

    return policy
  }


  useEffect(() => {
    const filtered = filterPolicies()
    setPolicies(filtered)
  },[])

  return (
    <div className='insurance_policy'>
        <h2>Insurance Coverage Policies</h2>
        
        {
          policies
          ?
          <>
          <p><b>Please note that this is just an informational services. For acurate coverage please call your provider and clinic</b></p>
          <h3>Private Coverage</h3>
          <p>{policies.requiresCoverage}</p>
          <p>{policies.privateCoverageNoRestriction}</p>
          <p>{policies.privateExceptionLife}</p>
          <p>{policies.privateExceptionHealth}</p>
          <p>{policies.privateExceptionRI}</p>
          
          <h3>Exchange Coverage</h3>
          <p>{policies.exchangeNoRestrictions}</p>
          <p>{policies.exchangeExceptionLife}</p>
          <p>{policies.exchangeExceptionHealth}</p>
          <p>{policies.exchangeExceptionFetal}</p>
          <p>{policies.exchangeExceptionRI}</p>
          <p>{policies.exchangeForbid}</p>

          <h3>Medicaid Coverage</h3>
          <p>{policies.medicaidPatientDecision}</p>
          <p>{policies.medicaidExceptionLife}</p>
          <p>{policies.medicaidExceptionHealth}</p>
          <p>{policies.medicaidExceptionFetal}</p>
          <p>{policies.medicaidExceptionRI}</p>
          </>
          :<p>No information on insurance policies</p> 
        }
    </div>
  )
}

export default InsuracePolicies