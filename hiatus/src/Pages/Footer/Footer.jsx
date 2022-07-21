import React from 'react';
import Donate from '../Donate/Donate';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div id="Footer">
      <Card border="light">
      <h6>Connect with the creators of Hiatus</h6>
      <ul>
        Cecilia Hernandez<br />
        Links to LinkedIn and Github

        Martin Wilson <br />
        Links to LinkedIn and Github
      </ul>

      <Donate />
      </Card>
      </div>
  )
}

export default Footer