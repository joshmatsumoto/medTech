import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import medTechLogo2 from '../../assets/medTechLogoNoWhite.png';
import { Link } from'react-router-dom';
function SafetyTips() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <div> < Image as={Link} to="https://www.techsafety.org/technology-safety-quick-tips" width={900} height={500} alt="1x2"
          className="d-block w-100"
          src={medTechLogo2}/>
          </div>
        <Carousel.Caption>
          <h3></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div> <Image width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={medTechLogo2}
        /> </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div> <Image width={1} height={2} alt="1x2"
          className="d-block w-100"
          src={medTechLogo2}
        /> </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SafetyTips;