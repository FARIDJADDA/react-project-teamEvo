import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HeaderBloc.css";

const HeaderBloc = ({ background, firstTitle, secondTitle, button }) => {
  return (
    <Row
      className='justify-content-center header-title pt-5 pb-5'
      style={background}>
      <Col md={12} lg={8}>
        <Row>
          <Col md='auto' lg={12}>
            {firstTitle ? firstTitle : ""}
          </Col>
          <Col md='auto' lg={12}>
            {secondTitle ? secondTitle : ""}
          </Col>
        </Row>
        {button ? (
          <div className='d-flex justify-content-center p-1'>{button}</div>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default HeaderBloc;
