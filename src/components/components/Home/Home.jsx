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
      <Container fluid dark>
        <Row className='home-container'>
          <Col md='6' lg='6'>
            {home.map((data) => {
              return <HomeContent id={data.page} homeData={data} />;
            })}
          </Col>
          <Col fluid md='9' lg='9'>
            <div>
              <div className='test0'></div>
            </div>
            <div>
              <div className='test1'></div>
            </div>
            <div>
              <div className='test2'></div>
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
