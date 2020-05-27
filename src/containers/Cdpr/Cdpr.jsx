import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cdpr.css";
import { useSelector } from "react-redux";
import CdprComponent from "../../components/components/Cdpr/CdprComponent";

const Cdpr = () => {
  const cdpr = useSelector((state) => state.cdpr);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='headerCdpr p-5'>
            <p>Team Evo</p>
            <p className='yellowColor'>Privacy Policy</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {cdpr.map((element) => {
              return <CdprComponent data={element} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cdpr;
