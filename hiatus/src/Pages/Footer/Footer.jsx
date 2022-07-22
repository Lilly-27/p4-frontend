import React from 'react';
import "./Footer.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Donate from '../Donate/Donate';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div id="Footer">
      <div className="footer-container">
        <Row className="team-container">
            <Col id="brief">
              <img 
                src="https://i.imgur.com/ee28Yvc.png"
                width="100" 
                height="100"
                alt="Hiatus" />
                <p>Working to help people gain access <br />to information on abortion services post-Roe, <br />regardless of where they live.</p>
            
            </Col>

            <Col>
              <Donate />
            </Col>

            <Col id="dev">
                  <h4>Hiatus' Creators</h4>
               
                    <h6>Cecilia Hernandez</h6>
                    <li>
                      <a href="https://www.linkedin.com/in/cecilia-h/">LinkedIn</a>
                    </li>
                    <li>
                   <a href="https://github.com/Lilly-27">Github</a>
                   </li>
                   <br />
          

                  <h6>Martin Wilson</h6>
           
                  <li>
                    <a href="https://www.linkedin.com/in/martin-wilson-tel/">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://github.com/TelleDelly">Github</a>
                  </li>
                  
            </Col>
        </Row>

      </div>
    </div>
  )
}

export default Footer