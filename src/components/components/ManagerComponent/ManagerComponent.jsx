import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./ManagerComponent.css";
const ManagerComponent = ({ data }) => {
  return (
    <>
      <Col className='d-flex justify-content-center col-4 p-5'>
        <Card className='cardElement'>
          <Card.Img className='imageManager' variant='top' src={data.image} />
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
    </>
  );
};

export default ManagerComponent;
