import React from "react";
import { Row, Container } from "react-bootstrap";
import WebTvTwitch from "./../containers/webtvtwitch/WebTvTwitch";

const WebTvPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <WebTvTwitch />
        </Row>
      </Container>
    </>
  );
};

export default WebTvPage;
