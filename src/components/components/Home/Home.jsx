import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container fluid dark>
        <Row fluid>
          <Col fluid md='6' lg='6'>
            <section id='section1' name='section1' className='section section1'>
              <h1>WeAre Esport</h1>
              <h2 className='title'>
                Lorem ipsum dolor sit amet, consectetur.
              </h2>
              <Button variant='success'>Achievements Page</Button>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dolores cumque ut natus sequi consectetur tenetur
                aliquam voluptate delectus quia, ab tempore assumenda reiciendis
                sunt veniam, consequuntur consequatur amet unde. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quis, eveniet
                atque totam veritatis
              </p>
            </section>
            <section id='section2' name='section2' className='section'>
              <h1>WeAre Esport</h1>

              <h2 className='title'>
                Animi, sequi expedita sit minus omnis facilis
              </h2>
              <Button variant='success'>Achievements Page</Button>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dolores cumque ut natus sequi consectetur tenetur
                aliquam voluptate delectus quia, ab tempore assumenda reiciendis
                sunt veniam, consequuntur consequatur amet unde. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quis, eveniet
                atque totam veritatis officia quas quaerat, temporibus
                repellendus pariatur corporis minima eos tempora vitae
                voluptate!
              </p>
            </section>
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
        <a href='#app'>
          <FontAwesomeIcon icon={faArrowCircleUp} color='white' />
        </a>
        <a href='#section1'>
          <FontAwesomeIcon icon={faCircle} color='white' />
        </a>
        <a href='#section2'>
          <FontAwesomeIcon icon={faCircle} color='white' />
        </a>
        <a href='#footer'>
          <FontAwesomeIcon icon={faArrowCircleDown} color='white' />
        </a>
      </div>
    </>
  );
};

export default Home;
