import React from "react";
import { Row, Col } from "react-bootstrap";

const HomeContent = ({ homeData, id }) => {
  return (
    <Row>
      <Col>
        <section id={id} name='section1' className='section section1'>
          <div className='title-evo'>
            <h3 className='weAre'>WeAre</h3>
            <h3 className='yellow-title'>Esport</h3>
            <h4 className='second-title'>{homeData.title}</h4>
          </div>
          <a href='../achievements' className='btn btn-evo' variant='success'>
            ACHIEVEMENTS
          </a>
          <p className='paragraph'>{homeData.text}</p>
        </section>
      </Col>
    </Row>
  );
};

export default HomeContent;
