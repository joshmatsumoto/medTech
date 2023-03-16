import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import safetynet from '../assets/safetynet.png';
import medTechLogoNoWhite from '../assets/medTechLogoNoWhite.png';
import { Link } from'react-router-dom';

function SafetyTips() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <div> < Image as={Link} to="https://www.techsafety.org/technology-safety-quick-tips" width={900} height={500} alt="1x2"
          className="d-block w-100"
          src={safetynet}/>
          </div>
        <Carousel.Caption>
          <h1>Tech Safety Tip</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div> <Image as={Link} to="https://giving.aidslifecycle.org/participant/2549" width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={medTechLogoNoWhite}
        /> </div>
        <Carousel.Caption>
          <h2>Aids Life cycle </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div> <Image as={Link} to="https://giving.aidslifecycle.org/participant/2549" width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={medTechLogoNoWhite}
        /> </div>
        <Carousel.Caption>
          <h3>Team Funky Monkey</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SafetyTips;