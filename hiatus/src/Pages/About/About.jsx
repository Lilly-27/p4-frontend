import React from 'react'
import './About.css'
import Carousel from 'react-bootstrap/Carousel';


function About() {
  return (
    <>
    <div id="Carousel">
      <div id="Carousel-container">
      <Carousel fade>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/kiVzpEB.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3><span>Preparing for a life<br />
          post-Roe where everyone has<br/>
          access to information</span></h3>
          <a href="#About"><span id="text">About</span></a>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/wmRXyfT.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3><span>Information is Power <br />
          Stay informed during <br/>
          this Hiatus</span></h3>
          <a href="#map"><span id="text">Map</span></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/S9Sj59C.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <h3><span>Support means Resources <br />
          Check out resources <br/>
          available to you</span></h3>
          <a href="#Resources"><span id="text">Resource Hub</span></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/uX8s3yb.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3><span>Our Stories Matter <br />
          Feel Empowered to <br/>
          Share Your Story</span></h3>
          <a href="#Stories"><span id="text">Stories</span></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/LKYckK7.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <h3><span>Empowered People <br/>Empower People <br />
          Donate to Abortion Funds</span></h3>
          <a href="#Donate"><span id="text">Donate</span></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      

      <div className="About" id="About">
        <div id="about-one">
          <img src="https://i.imgur.com/fZmqEvT.png" alt="women protesting for rights" id="protest"/>
        </div>

        <div id="about-two">
        <h2 id="title">About Hiatus</h2>
        <p id="about-intro">After SCOTUS overturned Roe v. Wade on June 24, 2022, we knew people with power would do their best to obscure information on abortion services.
          {/* Many of our grandmothers shared their stories pre-Roe, and it was a life full of unnecessary and cruel pain. */}
          In hopes of being of service during this unexpected and dangerous interuption in women's rights, 
          we -- Martin & I -- decided to create a resource for people seeking abortion care. <br /></p>
        <p id="about-intro">Our interactive map below shows you which states are protecting access to abortion services according to The New York Times' IG posts. Once you click on Illinois, you'll be able to see some clinics that are open and servicing people.
        For now, Illinois is the only state with clinic data. We're working on partnering with more national organizations to help us expand. </p>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default About