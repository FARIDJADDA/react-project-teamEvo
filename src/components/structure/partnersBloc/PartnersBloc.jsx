import React from "react";
import { useSelector } from "react-redux";
import "./partnersBloc.css";
import { Container, Row, Col } from "react-bootstrap"; 

const PartnersBloc = () => {
  const partners = useSelector((state) => state.partners);
  return (
    <>
      <Container fluid className='d-flex justify-content-center partnersbloc' >
        <Row>
          {partners.map((partner, index) => {
            return (
              <Col className='center p-3' key={index}>
                <a href='/partners'>
                  <img src={partner.image} alt={`${partner.name}-logo`} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default PartnersBloc;
