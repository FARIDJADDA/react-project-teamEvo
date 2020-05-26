import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ChiefComponent from "./../../components/components/Staff/ChiefComponent";

function StaffList() {
  const staff = useSelector((state) => state.staff);
  return (
    <>
      <Container>
        <h1>STAFF</h1>
        <h3>TITRE</h3>
        <Row>
          <Col>
            {staff
              .filter((person) => person.role === "chief")
              .map((person) => {
                return <ChiefComponent data={person} />;
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StaffList;
