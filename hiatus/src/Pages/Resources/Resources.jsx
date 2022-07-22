import React from 'react'
import './Resources.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

function Resources() {
  return (
    <>
    <div id="Resources">
      <h2> Resource Hub</h2>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/l6lXnyp.jpg" />
        <Card.Body>
          <Card.Title>What are the different types of abortion?</Card.Title>
          <Card.Text>
            Planned Parenthood is an excellent resource to learn more about the two types of abortions: Medical Abortion and Surgical Abortion.
          </Card.Text>
          <a href="https://www.plannedparenthood.org/learn/ask-experts/what-are-the-different-types-of-abortion" >
          <Button id="btn">More Info</Button>
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
          <Button id="btn">More Info</Button>
          </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/CJi2vQZ.jpg" />
        <Card.Body>
          <Card.Title>Take care of your mental health, Queen! </Card.Title>
          <Card.Text>
            Seeking counseling services and therapy online is made easy with Cerebral. Read their blog post on how you can find a therapist near you.
          </Card.Text>
          <a href="https://cerebral.com/blog/how-do-i-find-a-therapist-near-me" >
          <Button id="btn">More Info</Button>
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  );
  
}

export default Resources