import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ValuesItem.css";

const ValuesItem = ({ data }) => {
  return (
    <Row className='values-item p-4' id={data.id}>
      <Col className='offset-2 col-8'>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {data.link ? (
          <div className='d-flex justify-content-center pt-4 pb-2'>
            <a href={data.url} target='_blank' rel='noopener noreferrer'>
              {data.link}
            </a>
          </div>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};

export default ValuesItem;
