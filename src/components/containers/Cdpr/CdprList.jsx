import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CdprList.css";
import { useSelector } from "react-redux";
import CdprComponent from "../../components/Cdpr/CdprComponent";
import WaitData from "../../components/Spinner/WaitData";

const CdprList = () => {
  const cdpr = useSelector((state) => state.cdpr);

  if (!cdpr.length) {
    return <WaitData />;
  }
  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="headerCdpr p-5">
            <h3>Team Evo</h3>
            <h3 className="yellowColor">Privacy Policy</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={8} className="pt-3">
            {cdpr.map((element) => {
              return <CdprComponent data={element} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CdprList;
