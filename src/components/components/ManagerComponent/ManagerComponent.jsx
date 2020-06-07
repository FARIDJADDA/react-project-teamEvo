import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ManagerComponent.css";
const ManagerComponent = ({ data }) => {
  return (
    <Col sm={12} md={3} lg={3}>
      <Row className='justify-content-center mt-3 mb-3'>
        <Col>
          <Row className='justify-content-center nickName'>
            <p>{data.nickName}</p>
          </Row>
          <Row className='justify-content-center'>
            <Card className='cardElement'>
              <Card.Img
                className='imageManager'
                variant='top'
                src={data.image}
              />
              <Card.Body className='affichage'>
                <Card.Text className='text-card'>
                  <p>
                    {data.firstName}-{data.lastName}
                  </p>
                  <p>{data.role}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ManagerComponent;
