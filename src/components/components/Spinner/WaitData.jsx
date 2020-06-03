import React from 'react';
import { Container,Row, Spinner } from "react-bootstrap";
import './WaitData.css'


const WaitData = () => {
    return (
      <Container fluid>
        <Row className="wait-data">
          <h1>Chargement...
          <Spinner animation='border'/>
          </h1>
        </Row>
      </Container>
    );
};

export default WaitData;