import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Stories.css';


function Stories() {
  const [storyData, setStoryData] = useState();
  const [selected, setSelected] = useState(null)

  const handleButton = (e) => {
    e.preventDefault();
    const selectedNumber= Number(e.target.dataset.key)
    setSelected(selectedNumber)
  }
  
  const fetchAll = () => {
    const storyURL = `${process.env.REACT_APP_API_ENDPOINT_PROD}stories/getall`
    fetch(storyURL)
    .then((res) => res.json())
    .then((data)=>{
      return setStoryData(data)
    })
    .catch(console.error)
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <div id="Stories">
      <Card id="banner">
      <Card.Img src="https://i.imgur.com/DJnLxtx.png" alt="women supporting women" />
      <Card.ImgOverlay>
        <Card.Body className='caption'>
        <Card.Header as='h3'>
          Our Stories Matter
        </Card.Header>
        <Card.Text as='h4'>
        Our hope is for you to read these stories and <br />
        feel comforted by the fact that you are not alone.
        </Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
   
      
      <Row xs={2} md={3} id="container">
      {storyData
      ? storyData.map((story, index) => {
          return(
            <Col id="columns" key={index}>
              <Card id="card">
                <Card.Body>
                  <Card.Title>{story.title}</Card.Title>
                  {selected === index
                    ? <Card.Text> {story.body}</Card.Text>
                    :<Card.Text>{story.body.slice(0,250)}</Card.Text>
                  }
                  <Button className="btn" size="sm" onClick={handleButton} data-key={index}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          )
      })
      :<p>Loading...</p>
      }
      </Row>
   
     </div>
  )
}

export default Stories