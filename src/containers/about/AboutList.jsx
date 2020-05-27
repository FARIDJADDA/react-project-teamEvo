import React from "react";
import { useSelector } from "react-redux";
import AboutComponent from "./../../components/components/About/AboutComponent";
import "./AboutList.css";
import { Row, Col } from "react-bootstrap";

/**
 * @param  {} { partners, onDelete } represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function AboutList() {
  const about = useSelector((state) => state.about);
  return (
    <Row>
      <Col className='about-section'>
        {about.map((about, index) => {
          return <AboutComponent about={about} key={index} />;
        })}
      </Col>
    </Row>
  );
}

export default AboutList;
