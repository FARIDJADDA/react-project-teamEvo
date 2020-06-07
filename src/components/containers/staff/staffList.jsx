import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./staffList.css";
import StaffTextComponent from "./../../components/Staff/StaffTextComponent";
import WaitData from "./../../components/Spinner/WaitData";
import StaffComponent from "./../../components/Staff/StaffComponent";

function StaffList() {
  const staff = useSelector((state) => state.staff);
  const staffText = useSelector((state) => state.staffText);

  if (!staff.length) {
    return <WaitData />;
  }

  return (
    <Container fluid>
      <Row className='justify-content-md-center titles'>
        <Col md={12} lg={8}>
          <div className='d-flex staff-title'>
            <div className='big-box'></div>
            <h1>STAFF</h1>
          </div>
          <div className='d-flex'>
            <div className='little-box'></div>
            <h3>TITRE</h3>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-md-center pt-3 pb-5'>
        {staff
          .filter((person) => person.role === "chief")
          .map((person, index) => {
            return (
              <Col sm={12} md={4} lg={4}>
                <Row className='justify-content-center mt-3 mb-3'>
                  <StaffComponent key={index} data={person} />
                </Row>
              </Col>
            );
          })}
      </Row>

      <Row className='justify-content-md-center bg-text p-5'>
        <Col md={12} lg={8}>
          {staffText.map((data, index) => {
            return <StaffTextComponent key={index} data={data} />;
          })}
        </Col>
      </Row>

      <Row className='justify-content-md-center titles pt-4'>
        <Col md={12} lg={8}>
          <div className=' d-flex'>
            <div className='little-box'></div>
            <h3>MANAGER</h3>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-md-center pt-5 pb-5'>
        {staff
          .filter((person) => person.role === "manager")
          .map((person, index) => {
            return (
              <Col sm={12} md={3} lg={3}>
                <Row className='justify-content-center  mt-3 mb-3'>
                  <StaffComponent key={index} data={person} />
                </Row>
              </Col>
            );
          })}
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className='justify-content-center mb-5'>
            <h2 className='little-title pb-2'>
              <span className='hashtag'>#</span>WeAre
              <span className='yellow-title'>Evo</span>
            </h2>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default StaffList;
