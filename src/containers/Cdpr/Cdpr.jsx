import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cdpr.css";
import { useSelector } from "react-redux";
import CdprComponent from "../../components/components/Cdpr/CdprComponent";
import WaitData from "../../components/components/Spinner/WaitData";

const Cdpr = () => {
  const cdpr = useSelector((state) => state.cdpr);

  if (!cdpr.length) {
    return <WaitData />;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="headerCdpr p-5">
            <p>Team Evo</p>
            <p className="yellowColor">Privacy Policy</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="pt-3">
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
