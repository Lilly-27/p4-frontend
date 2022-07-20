import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Stories.css'

function Stories() {
  const [storyData, setStoryData] = useState()
  const fetchAll = () => {
    const storyURL = `${process.env.REACT_APP_API_ENDPOINT_PROD}stories/getall`
    fetch(storyURL)
    .then((res) => res.json())
    .then((storyData)=>{
      // console.log(storyData)
      return setStoryData(storyData)
    })
    .catch(console.error)
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <div id="Stories">
      <h2>Our Stories Matter</h2>
      <p>Sharing our stories help us build a sense of community with each other, of acceptance and unity. <br />
        Our hope is for you to read these stories and feel comforted by the fact that you are not alone.</p>
       <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Story
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   
     </div>
  )
}

export default Stories