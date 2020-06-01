import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const sideBar = {
  position: "fixed",
  height: "100vh",
  width: "5vh",

  paddingLeft: "1vh",
  top: "0",
  right: "0",
  paddingTop: "50vh",
  "& div": {
    width: "5vh",
    textAlign: "center",
    display: "flex flex-wrap",
    "& a": {
      width: "5vh",
      textAlign: "center",
    },
  },
};
const test0 = {
  background:
    "url(https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/HomeImage%2F2018GA-aAa-L10.jpg?alt=media&token=69b85bc3-2346-49fd-9c24-a5cba47ca7b5)",
  webkitClipPath: "polygon(0 0, 50% 100%, 100% 0)",
  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
  width: "60vh",
  height: "60vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: "-2vh",
  backgroundSize: "200%",
  position: "fixed",
  zIndex: "-100",
  right: "61vh",
};
const test1 = {
  background:
    "url(https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/HomeImage%2FAAA-EOS2019-12.jpg?alt=media&token=1a75e6a8-086b-440c-8e9e-7b75522f455f)",
  webkitClipPath: "polygon(50% 0, 0% 100%, 100% 100%)",
  clipPath: "polygon(50% 0, 0% 100%, 100% 100%)",
  width: "60vh",
  height: "60vh",
  backgroundSize: "200%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: "-2vh",

  position: "fixed",
  zIndex: "-100",
  right: "30vh",
};
const test2 = {
  background:
    "url(https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/HomeImage%2FAAA-GA2019-41.jpg?alt=media&token=41b372f0-e91d-4ac9-8faf-d2d07e986528)",
  webkitClipPath: "polygon(0 0, 50% 100%, 100% 0)",
  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
  width: "60vh",
  height: "60vh",
  top: "59vh",
  backgroundSize: "200%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "fixed",
  zIndex: "-100",
  right: "30vh",
};
const section1 = {
  marginBottom: "70vh",
};
const section = {
  position: "relative",
  margin: "50px",
  paddingTop: "10vh",
};
const paragraph = {
  textAlign: "justify",
};

const title = {
  borderBottom: "solid 6px #c8d600",
  marginRight: "6vh",
};
const HomePage = () => {
  return (
    <>
      <Container fluid='true' dark>
        <Row fluid>
          <Col fluid md='6' lg='6'>
            <section
              id='section1'
              name='section1'
              style={{ ...section, ...section1 }}>
              <img
                alt='LogoPage1'
                rel='preconnect'
                src='https://via.placeholder.com/500x140/000000/FFFFFF/?text=LogoPage1'
              />
              <h2 style={title}>Lorem ipsum dolor sit amet, consectetur.</h2>
              <Button variant='success'>Achievements Page</Button>
              <p style={paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dolores cumque ut natus sequi consectetur tenetur
                aliquam voluptate delectus quia, ab tempore assumenda reiciendis
                sunt veniam, consequuntur consequatur amet unde. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quis, eveniet
                atque totam veritatis
              </p>
            </section>
            <section id='section2' name='section2' style={section}>
              <img
                alt='LogoPage2'
                rel='preconnect'
                src='https://via.placeholder.com/500x140/000000/FFFFFF/?text=LogoPage2'
              />

              <h2 style={title}>
                Animi, sequi expedita sit minus omnis facilis
              </h2>
              <Button variant='success'>Achievements Page</Button>
              <p style={paragraph}>
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
              <div style={test0}></div>
            </div>
            <div>
              <div style={test1}></div>
            </div>
            <div>
              <div style={test2}></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={sideBar} id='sidebar' class='list-group'>
        <a href='#app'>
          <FontAwesomeIcon icon={faArrowCircleUp} color='grey' size='1x' />
        </a>
        <a href='#section1'>
          <FontAwesomeIcon icon={faCircle} color='grey' size='0,9x' />
        </a>
        <a href='#section2'>
          <FontAwesomeIcon icon={faCircle} color='grey' size='0,9x' />
        </a>
        <a href='#footer'>
          <FontAwesomeIcon icon={faArrowCircleDown} color='grey' size='1x' />
        </a>
      </div>
    </>
  );
};

export default HomePage;
