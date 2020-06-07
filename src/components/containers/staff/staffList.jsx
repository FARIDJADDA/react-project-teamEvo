import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./staffList.css";

import ChiefComponent from "./../../components/Staff/ChiefComponent";
import StaffTextComponent from "./../../components/StaffTextComponent/StaffTextComponent";
import ManagerComponent from "./../../components/ManagerComponent/ManagerComponent";
import WaitData from "./../../components/Spinner/WaitData";

function StaffList() {
  const staff = useSelector((state) => state.staff);
  const staffText = useSelector((state) => state.staffText);

  if (!staff.length) {
    return <WaitData />;
  }

  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col md={12} lg={8}>
          <div className='d-flex element1'>
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
            return <ChiefComponent key={index} data={person} />;
          })}
      </Row>

      <Row className='justify-content-md-center bg-text p-5'>
        <Col md={12} lg={8}>
          {staffText.map((data, index) => {
            return <StaffTextComponent key={index} data={data} />;
          })}
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col md={12} lg={8}>
          <div className=' d-flex element3'>
            <div className='little-box'></div>
            <h3>MANAGER</h3>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-md-center pt-5 pb-5'>
        {staff
          .filter((person) => person.role === "manager")
          .map((person, index) => {
            return <ManagerComponent key={index} data={person} />;
          })}
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className='justify-content-center mb-5'>
            <h2 className='little-title pb-2'>
              <span className='hashtag2'>#</span>WeAre
              <span className='yellow-title'>Evo</span>
            </h2>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default StaffList;
