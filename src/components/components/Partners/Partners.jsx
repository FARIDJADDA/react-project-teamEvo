import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Partners.css";

const PartnerComponent = ({ partner }) => {
  if (partner.position % 2 === 0) {
    return (
      <Row className='bloc-partner p-5 bg-first'>
        <Col className='offset-2 col-8'>
          <Row className='d-flex justify-content-center'>
            <Col>
              <div className='f-flex justify-content-center partner-links'>
                <a className='partner-website' href={partner.website}>
                  {partner.website}
                </a>
                <a href={partner.twitter}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faTwitter}
                  />
                </a>
                <a href={partner.facebook}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faFacebook}
                  />
                </a>
              </div>
            </Col>
            <Col className='bloc-logo-right'>
              <img
                src={partner.image}
                alt='logo-partner'
                className='logo-partner'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className='bloc-partner p-5'>
        <Col className='offset-2 col-8'>
          <Row className='d-flex justify-content-center'>
            <Col className='bloc-logo-left'>
              <img
                src={partner.image}
                alt='logo-partner'
                className='logo-partner'
              />
            </Col>
            <Col>
              <div className='f-flex justify-content-center partner-links'>
                <a className='partner-website' href={partner.website}>
                  {partner.website}
                </a>
                <a href={partner.twitter}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faTwitter}
                  />
                </a>
                <a href={partner.facebook}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faFacebook}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
};

export default PartnerComponent;
