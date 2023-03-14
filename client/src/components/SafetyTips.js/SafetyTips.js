import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
 
const SafetyTips = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>Card 1</Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Body>Card 2</Card.Body>
        </Card>  
      </Col>

      <Col>  
        <Card>  
          <Card.Body>Card 3</Card.Body>  
        </Card>  
      </Col >

      <Col >  
        < Card >  
          < Card.Body > Card 4</ Card.Body >  
        </ Card >  

      </ Col >

      < Col >  

        < Card >  

          < Card.Body > Card 5</ Card.Body >  

        </ Card >  

      </ Col > 

      < Col > 

        < Card > 

          < Card.Body > Card 6</ Card.Body > 

        </ Card > 

      </ Col > 

    </ Row >  
    );  
}; 
export default SafetyTips;;

