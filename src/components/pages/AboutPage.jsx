import React from "react";
import { Container } from "react-bootstrap";
import HeaderBloc from "../components/HeaderBloc/HeaderBloc";
import AboutList from "../../containers/about/AboutList";

const AboutPage = () => {
  return (
    <>
      <Container fluid>
        <HeaderBloc />
        <AboutList />
      </Container>
    </>
  );
};

export default AboutPage;
