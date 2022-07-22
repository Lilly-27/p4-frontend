import React from 'react'
import './Donate.css'

function Donate() {
  return (
    <div id="Donate">
      <ul id="donate-list">
        <h4>Donate</h4>
        <h6>National Organizations</h6>
        <li>
          <a href="https://donate.abortionfunds.org/give/323375/#!/donation/checkout">National Network of Abortion Funds</a>
        </li>
        <li>
          <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JRWDB7QGEWH3U&source=url">Women's Reproductive Rights Assistance Project</a>
        </li>
      </ul>

      <ul id="donate-list">
        <h6>Support Your Local Abortion Funds</h6>
        <li>
          <a href="https://abortionfunds.org/funds/">Funds by State</a>
        </li>
      </ul>
    </div>
  )
}

export default Donate