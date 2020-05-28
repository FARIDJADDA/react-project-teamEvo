import React from "react";
import { Row } from "react-bootstrap";
import "./HeaderBloc.css";

const HeaderBloc = () => {
  return (
    <Row className="d-flex justify-content-center header-bloc p-5">
      <div className="header-title">
        <h1>
          <span className="hashtag">#</span>WeAre
          <span className="yellow-title">Evo</span>
        </h1>
        <h2>
          <span className="yellow-title">TOGETHER</span>, WE STAND
        </h2>
      </div>
    </Row>
  );
};

export default HeaderBloc;
