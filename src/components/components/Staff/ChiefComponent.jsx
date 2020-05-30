import React from "react";
import { Card } from "react-bootstrap";
import "./ChiefComponent.css";
import { Col, Row } from "react-bootstrap";
const ChiefComponent = ({ data }) => {
  return (
    <Col className='d-flex flex-column justify-content-center offset-2 col-3 card-border'>
      <Row className=' d-flex justify-content-center staff-pseudo'>
        <Col className='col-12'>
          <p>{data.nickName}</p>
        </Col>
      </Row>
      <Card className='cardElement'>
        <Card.Img className='imageChief' variant='top' src={data.image} />
        <Card.Body className='affichage'>
          <Card.Text className='text-card'>
            <p>
              {data.firstName}-{data.lastName}
            </p>
            <p className='style-role'>{data.role}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChiefComponent;
