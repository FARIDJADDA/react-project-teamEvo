import React from "react";
import { useSelector } from "react-redux";
import AboutComponent from "./../../components/components/About/AboutComponent";
import { Row, Col } from "react-bootstrap";

/**
 * @param  {} { partners, onDelete } represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function AboutList() {
  const about = useSelector((state) => state.about);
  return (
    <Row>
      <Col className="offset-2 col-8">
      {about.map((about, index) => {
        return <AboutComponent about={about} key={index} />;
      })}
      </Col>
        {console.log(about)}
    </Row>
    
  );
}

export default AboutList;