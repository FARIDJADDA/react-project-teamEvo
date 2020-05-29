import React from "react";
import { Card } from "react-bootstrap";
import "./ChiefComponent.css";
import { Col } from "react-bootstrap";
const ChiefComponent = ({ data }) => {
  return (
    <Col className='d-flex justify-content-center offset-2 col-3'>
      <Card className='cardElement'>
        <Card.Img className='imageChief' variant='top' src={data.image} />
        <Card.Body className='affichage'>
          <Card.Text>
            <p>
              {data.firstName}-{data.lastName}
            </p>
            <p>{data.role}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChiefComponent;
