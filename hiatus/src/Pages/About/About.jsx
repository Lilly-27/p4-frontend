import React from 'react'
import './About.css'
import Carousel from 'react-bootstrap/Carousel';


function About() {
  return (
    <>
    <div id="About">
      <div id="Carousel">
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/F7sYX6g.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Photo By Clay Banks from Unsplash</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/zgh7xpM.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Photo By Michelle Ding from Unsplash (@michelleding)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/hq6jIBj.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p> Photo By Gayatri Malhotra from Unsplash</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      

      <div className="about-text">
        
        
        <p></p>
      This is our about section.
        This is our about section. We are going to write a short summary of Hiatus.
      </div>
    </div>
    </>
  )
}

export default About