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
        <Row>
          <Col className='headerCdpr p-5'>
            <p>Team Evo</p>
            <p className='yellowColor'>Privacy Policy</p>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md={12} lg={8} className='pt-3'>
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
