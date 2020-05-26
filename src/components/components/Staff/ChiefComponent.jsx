import React from "react";
import { Card } from "react-bootstrap";
import "./ChiefComponent.css";
const ChiefComponent = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default ChiefComponent;
