import React from "react";
import { Row, Container } from "react-bootstrap";
import StaffList from "./../../containers/staff/staffList";

const AboutStaffPage = () => {
  return (
    <>
      <Container>
        <Row>
          <StaffList />
        </Row>
      </Container>
    </>
  );
};

export default AboutStaffPage;
