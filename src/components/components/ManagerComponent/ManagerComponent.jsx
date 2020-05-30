import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./ManagerComponent.css";
const ManagerComponent = ({ data }) => {
  return (
    <>
      <Col className='d-flex flex-column justify-content-center col-12 col-sm-4 p-5'>
        <Row className=' d-flex justify-content-center staff-pseudo'>
          <Col className='col-12'>
            <p>{data.nickName}</p>
          </Col>
        </Row>
        <Card className='cardElement'>
          <Card.Img className='imageManager' variant='top' src={data.image} />
          <Card.Body className='affichage'>
            <Card.Text className='text-card'>
              <p>
                {data.firstName}-{data.lastName}
              </p>
              <p>{data.role}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ManagerComponent;
