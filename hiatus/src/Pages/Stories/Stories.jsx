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
    // console.log(e.target.dataset.key)
    const selectedNumber= Number(e.target.dataset.key)
    setSelected(selectedNumber)
  }
  
  const fetchAll = () => {
    const storyURL = `${process.env.REACT_APP_API_ENDPOINT_PROD}stories/getall`
    fetch(storyURL)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
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
        <Card.Text className="caption">
          <h3>Our Stories Matter</h3><br />
          <h4>Our hope is for you to read these stories and <br />
        feel comforted by the fact that you are not alone.</h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
   
      
      <Row xs={2} md={3} id="container">
      {storyData
      ? storyData.map((story, index) => {
          return(
            <Col id="columns">
              <Card id="card" key={index}>
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