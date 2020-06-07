import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./StaffComponent.css";
const StaffComponent = ({ data }) => {
  return (
    <Col>
      <Row className='justify-content-center nickName'>
        <p>{data.nickName}</p>
      </Row>
      <Row className='justify-content-center'>
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
      </Row>
    </Col>
  );
};

export default StaffComponent;
