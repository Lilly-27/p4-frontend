import React from 'react';
import Donate from '../Donate/Donate';
import "./Footer.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Footer() {
  return (
    <div id="Footer">
      <div className="footer-container">
        <div className="team-container">
          {/* <h6>Meet Hiatus' Devs</h6> */}
            <div id="dev">
              <a href="https://www.linkedin.com/in/cecilia-h/"><img src="https://i.imgur.com/AbS6269.jpg" id="img-dev" alt="Cecilia" /></a>
                <div id="icons">
                  <a href="https://www.linkedin.com/in/cecilia-h/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" id="linkedin-icon" alt="LinkedIn icon" /></a>
                  <a href="https://github.com/Lilly-27"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" id="github" alt="github icon" /></a>
                </div>
            </div>

            <div id="dev">
            <a href="https://www.linkedin.com/in/martin-wilson-tel/"><img src="https://i.imgur.com/Xz3Kk9V.png" id="img-dev" alt="Martin" /></a>
                <div id="icons">
                  <a href="https://www.linkedin.com/in/martin-wilson-tel/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" id="linkedin-icon" alt="LinkedIn icon" /></a>
                  <a href="https://github.com/TelleDelly"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" id="github" alt="github icon" /></a>
                </div>
            </div>
        </div>







        <div className="donate">
          <Donate />
        </div>

        <div className="copyright">

        </div>

      </div>
      </div>
  )
}

export default Footer