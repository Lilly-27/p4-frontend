import React from 'react'

const InsuracePolicies = ({insurance}) => {
  return (
    <div className='insurance_policy'>
        <h2>Insurance Coverage Policies</h2>
        {insurance.requires_coverage
        ? <p>Insurance Coverage is required</p>
        : <p>Insurance Coverage is not required</p>
        }
        <h4>Private Coverage</h4>
        {insurance.private_coverage_no_restrictions
        ? <p>Private coverage no restrictions</p>
        : <p>Private coverages with restrictions</p>
        }
        {insurance.private_exception_life && <p>Excpetion for private insurance based on health</p>}
        {insurance.private_exception_health
        ? <p>Private coverage exception for {insurance.private_exception_health}</p>
        : <p>No private exception for health</p>
        }
        {insurance.private_exception_fetal
        ? <p>Private coverage exception for {insurance.private_exception_fetal}</p>
        : <p>No private exception for fetal health</p>
        }
        {insurance.private_exception_rape_or_incest
        ? <p>Private coverage exception for RI</p>
        : <p>No private coverage exception for RI</p>
        }
        <h4>Exchange Coverage Policies</h4>
        {insurance.exchange_coverage_no_restrictions
        ? <p>No restrictions</p>
        : <p>Some restrictions</p>
        }
        {insurance.exchange_exception_life
        ? <p>Rescrtion for life</p>
        : <p>No Restriction for life</p>
        }
        {insurance.exchange_exception_health
        ? <p>Exception for health:  {insurance.exchange_exception_health}</p>
        : <p>No Exception for health</p>
        }
        {insurance.exchange_exception_fetal
        ? <p>Exception for fetal {insurance.exchange_exception_fetal}</p>
        : <p>No exceptions for fetal</p>
        }
        {insurance.exchange_exception_rape_or_incest
        ? <p>Exception for RI</p>
        : <p>No exception for RI</p>
        }
        {insurance.exchange_forbids_coverage
        ? <p>Insurance forbids ccoverage</p>
        : <p>Inruaance doesn't forbid covergage</p>
        }
        {insurance.medicaid_coverage_provider_patient_decision
        ? <p>Allows Medicaid insurance coverage</p>
        : <p>Does not allow medicaid insurance coverage</p>
        }
        {insurance.medicaid_exception_life
        ? <p>Exception for life</p>
        : <p>No Exception for life</p>
        }
        {insurance.medicaid_exception_health
        ? <p>Exception for health {insurance.medicaid_exception_health}</p>
        : <p>No exception for health</p>
        }
        {insurance.medicaid_exception_fetal
        ? <p>Exception for fetal {insurance.medicaid_exception_fetal}</p>
        : <p>No exception fetal</p>
        }
        {insurance.medicaid_exception_rape_or_incests
        ? <p>Exceptions for RI</p>
        : <p>No Exceptions for RI</p>
        }


    </div>
  )
}

export default InsuracePolicies