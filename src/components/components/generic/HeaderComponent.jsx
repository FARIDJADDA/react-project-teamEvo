import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default ({ title, button }) => {
  const ButtonDetails = () => {
    return button === undefined ? (
      <></>
    ) : (
      <>
        <Button size={"sm"} variant="header">
          {button}
        </Button>
      </>
    );
  };
  return (
    <>
      <Row className="header-content">
        <Col>
          <h2
            dangerouslySetInnerHTML={{
              __html: title,
            }}>
            {/* {title} */}
          </h2>
          <ButtonDetails />
        </Col>
      </Row>
    </>
  );
};
