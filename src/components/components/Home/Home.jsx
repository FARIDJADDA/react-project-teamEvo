import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import HomeContent from "./HomeContent";

const Home = () => {
  const home = useSelector((state) => state.home);

  return (
    <>
      <Container fluid dark='true'>
        <Row className='home-container'>
          <Col sm={12} md={12} lg={6}>
            {home
              .sort((elem1, elem2) => elem1.page - elem2.page)
              .map((data, index) => {
                return (
                  <HomeContent key={index} id={data.page} homeData={data} />
                );
              })}
          </Col>
          <Col fluid='true' md={12} lg={9}>
            <div>
              <div className='bg-left'></div>
            </div>
            <div>
              <div className='bg-top'></div>
            </div>
            <div>
              <div className='bg-bottom'></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='sideBar list-group' id='sidebar'>
        <a href='#1'>
          <FontAwesomeIcon icon={faArrowCircleUp} color='white' />
        </a>
        <FontAwesomeIcon icon={faCircle} color='white' />
        <FontAwesomeIcon icon={faCircle} color='white' />
        <a href='#2'>
          <FontAwesomeIcon icon={faArrowCircleDown} color='white' />
        </a>
      </div>
    </>
  );
};

export default Home;
