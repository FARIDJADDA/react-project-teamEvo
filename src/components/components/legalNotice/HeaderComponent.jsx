import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default ({ title, button }) => {
  const ButtonDetails = () => {
    return button === undefined ? (
      <></>
    ) : (
      <>
        <Button>{button}</Button>
      </>
    );
  };
  return (
    <>
      <Row className="header-legal">
        <Col>
          <h2>{title}</h2>
          <ButtonDetails />
        </Col>
      </Row>
    </>
  );
};
