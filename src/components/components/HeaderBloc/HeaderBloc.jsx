import React from "react";
import { Row } from "react-bootstrap";
import "./HeaderBloc.css";

const HeaderBloc = ({ background, firstTitle, secondTitle, button }) => {
  return (
    <Row
      className='d-flex flex-column justify-content-center header-title p-5'
      style={background}>
      {firstTitle ? firstTitle : ""}
      {secondTitle ? secondTitle : ""}
      {button ? (
        <div className='d-flex justify-content-center p-1'>{button}</div>
      ) : (
        ""
      )}
    </Row>
  );
};

export default HeaderBloc;
