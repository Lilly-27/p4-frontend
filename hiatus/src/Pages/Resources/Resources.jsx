import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

function Resources() {
  return (
    <>
    <div id="card-container">
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/l6lXnyp.jpg" />
        <Card.Body>
          <Card.Title>What are the different types of abortion?</Card.Title>
          <Card.Text>
            Planned Parenthood is an excellent resource to learn more about the two types of abortions: Medical Abortion and Surgical Abortion.
          </Card.Text>
          <a href="https://www.plannedparenthood.org/learn/ask-experts/what-are-the-different-types-of-abortion" >
          <Button variant="primary">More Info</Button>
          </a>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/ajaN7sr.jpg" />
        <Card.Body>
          <Card.Title>How to show your support</Card.Title>
          <Card.Text>
          The Center for Reproductive Rights shared seven actions you can take to support women and people who are able to concieve. 
          </Card.Text>
          <a href="https://reproductiverights.org/seven-things-you-can-do-right-now-advance-abortion-rights/" >
          <Button variant="primary">More Info</Button>
          </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <a href="https://www.abortionfinder.org/abortion-types/pill" >
          <Button variant="primary">More Info</Button>
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  );
  
}

export default Resources