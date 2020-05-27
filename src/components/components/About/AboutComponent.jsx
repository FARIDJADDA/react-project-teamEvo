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
            <div className="d-flex justify-content-end" >
              <h1 className='pt-sm-2'>{about.title}</h1>
              <div className='yellowBox-right'></div>
            </div>
              <p>{about.text}</p>
            </div>
          </>
        ) : (
          <div>
            <div className="d-flex">
              <div className='yellowBox-left'></div>
              <h1 className='pt-sm-2'>{about.title}</h1>
            </div>
              <p className='pb-2'>{about.text}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default AboutComponent;
