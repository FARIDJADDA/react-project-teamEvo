import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ChiefComponent.css";
const ChiefComponent = ({ data }) => {
  return (
    <Col sm={12} md={4} lg={4}>
      <Row className='justify-content-center  mt-3 mb-3'>
        <Col>
          <Row className='justify-content-center'>
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
      </Row>
    </Col>
  );
};

export default ChiefComponent;
