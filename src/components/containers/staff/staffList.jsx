import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ChiefComponent from "./../../components/Staff/ChiefComponent";
import "./staffList.css";
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
    <>
      <Container fluid className='staff-content'>
        <Row>
          <Col className='offset-2 col-8'>
            <Row className='d-flex element1'>
              <div className='yellowBox1'></div>
              <h1>STAFF</h1>
            </Row>
            <Row className='d-flex element2'>
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
          </Col>
        </Row>

        <Row fluid className='text-content'>
          <Col className=' offset-2 col-8 p-5'>
            {staffText.map((data, index) => {
              return <StaffTextComponent key={index} data={data} />;
            })}
          </Col>
        </Row>

        <Row>
          <Col className='offset-2 col-8'>
            <Row className=' d-flex element3'>
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
              <h2 className='little-title pb-2'>
                <span className='hashtag2'>#</span>WeAre
                <span className='yellow-title'>Evo</span>
              </h2>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StaffList;
