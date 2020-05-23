import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import FooterList from "./FooterList";
import "./footer.css";
import { Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Footer = () => {
  const footer = useSelector((state) => state.footer);
  return (
    <>
      <Container
        id='footer'
        fluid
        className='footer d-flex justify-content-center'>
        <Row noGutters className='width75'>
          <Col
            className='p-2 justify-content-center text-center'
            xs={12}
            lg={3}>
            <img
              alt='logo-evo'
              src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/imageEvo%2Flogo-teamevo.png?alt=media&token=ba39d186-ba00-4912-8a73-33b833c9ff37'
            />
          </Col>
          <FooterList footer={footer} title='TEAMS' />
          <FooterList footer={footer} title='TEAM EVO' />
          <FooterList footer={footer} title='SOCIALS' />
          <FooterList footer={footer} title='PLUS' />
        </Row>
      </Container>
    </>
  );
};

export default Footer;
