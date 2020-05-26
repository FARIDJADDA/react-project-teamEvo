import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutComponent.css";

const AboutComponent = ({ about }) => {
  return (
    <Row>
      <Col className='about-content offset-2 col-8'>
        {about.image ? (
          <>
            <img src={about.image} alt='maillot' />
            <div className='divImage mb-2'>
              <h1 className='pt-sm-2'>{about.title}</h1>
              <p>{about.text}</p>
            </div>
          </>
        ) : (
          <div>
            <h1 className='pt-sm-2'>{about.title}</h1>
            <p className='pb-2'>{about.text}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default AboutComponent;
