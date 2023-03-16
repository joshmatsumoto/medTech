import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import safetynet from '../assets/safetynet.png';
import medTechLogoNoWhite from '../assets/medTechLogoNoWhite.png';
import Edwin from '../assets/Edwin.jpg';
import group from '../assets/group.jpg';
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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div> <Image as={Link} to="https://giving.aidslifecycle.org/participant/2549" width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={Edwin}
        /> </div>
        <Carousel.Caption>
          <h2>The Funky Monkey Team </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div> <Image as={Link} to="https://giving.aidslifecycle.org/participant/2549" width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={group}
        /> </div>
        <Carousel.Caption>
          <h3>Team Funky Monkey</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SafetyTips;