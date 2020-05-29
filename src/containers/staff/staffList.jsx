import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ChiefComponent from "./../../components/components/Staff/ChiefComponent";
import "./staffList.css";
import StaffTextComponent from "./../../components/components/StaffTextComponent/StaffTextComponent";
import ManagerComponent from "./../../components/components/ManagerComponent/ManagerComponent";

function StaffList() {
  const staff = useSelector((state) => state.staff);
  const staffText = useSelector((state) => state.staffText);
  return (
    <>
      <Container fluid className='staff-content'>
        <Row className=' d-flex offset-2 col-6 element1'>
          <div className='yellowBox1'></div>
          <h1>STAFF</h1>
        </Row>
        <Row className=' d-flex offset-2 col-6 element2'>
          <div className='yellowBox2'></div>
          <h3>TITRE</h3>
        </Row>

        <Row className='p-5'>
          {staff
            .filter((person) => person.role === "chief")
            .map((person, index) => {
              return <ChiefComponent key={index} data={person} />;
            })}
        </Row>

        <Row fluid className='text-content'>
          <Col className='offset-2 col-8 p-3'>
            {staffText.map((data, index) => {
              return <StaffTextComponent key={index} data={data} />;
            })}
          </Col>
        </Row>

        <Row className=' d-flex offset-2 col-6 element3'>
          <div className='yellowBox3'></div>
          <h3>MANAGER</h3>
        </Row>

        <Row>
          {staff
            .filter((person) => person.role === "manager")
            .map((person, index) => {
              return <ManagerComponent key={index} data={person} />;
            })}
        </Row>
        <Row className='d-flex justify-content-center last-title'>
          <h2 className='little-title'>
            #WeAre<span className='yellow-title'>Evo</span>
          </h2>
        </Row>
      </Container>
    </>
  );
}

export default StaffList;
