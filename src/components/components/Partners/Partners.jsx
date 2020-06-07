import React from "react";
import { Row, Col, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Partners.css";
import PartnerDetail from "../detailPartner/PartnerDetail";

const PartnerComponent = ({ partner }) => {
  const [open, setOpen] = React.useState(false);

  return partner.position % 2 === 0 ? (
    <Row
      className='bloc-partner bg-first justify-content-md-center'
      style={{ backgroundImage: `url("${partner.bgImage}")` }}>
      <Col md={12} lg={8}>
        <Row>
          <Col md={12} lg={7} className='justify-content-center'>
            <Row className='partner-links justify-content-center'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='partner-website'
                href={partner.website}>
                {partner.website}
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={partner.twitter}>
                <FontAwesomeIcon className='social-partner' icon={faTwitter} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={partner.facebook}>
                <FontAwesomeIcon className='social-partner' icon={faFacebook} />
              </a>
            </Row>
          </Col>
          <Col md={12} lg={5}>
            <Row className='justify-content-center row-img'>
              <button
                className='btn-link'
                onClick={() => setOpen(!open)}
                aria-controls='example-collapse-text'
                aria-expanded={open}>
                <img
                  src={partner.image}
                  alt='logo-partner'
                  className='logo-partner'
                />
              </button>
            </Row>
          </Col>
          <Col md={12} lg={12}>
            <Collapse in={open}>
              <Row id='example-collapse-text'>
                <PartnerDetail partner={partner} />
              </Row>
            </Collapse>
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Row
      className='bloc-partner2 justify-content-md-center'
      style={{ backgroundImage: `url("${partner.bgImage}")` }}>
      <Col md={12} lg={8}>
        <Row>
          <Col md={12} lg={5}>
            <Row className='justify-content-center row-img'>
              <button
                className='btn-link'
                onClick={() => setOpen(!open)}
                aria-controls='example-collapse-text'
                aria-expanded={open}>
                <img
                  src={partner.image}
                  alt='logo-partner'
                  className='logo-partner'
                />
              </button>
            </Row>
          </Col>
          <Col md={12} lg={7} className='justify-content-center'>
            <Row className='partner-links justify-content-center'>
              <Col md={12} lg='auto' className='text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='partner-website'
                  href={partner.website}>
                  {partner.website}
                </a>
              </Col>
              <Col md={12} lg='auto' className='text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={partner.twitter}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faTwitter}
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={partner.facebook}>
                  <FontAwesomeIcon
                    className='social-partner'
                    icon={faFacebook}
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={12}>
            <Collapse in={open}>
              <Row id='example-collapse-text'>
                <PartnerDetail partner={partner} />
              </Row>
            </Collapse>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PartnerComponent;
