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
      className="bloc-partner p-5 bg-first"
      style={{ backgroundImage: `url("${partner.bgImage}")` }}
    >
      <Col className="offset-2 col-8">
        <Row className="d-flex justify-content-center">
          <Col>
            <div className="f-flex justify-content-center partner-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="partner-website"
                href={partner.website}
              >
                {partner.website}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={partner.twitter}
              >
                <FontAwesomeIcon className="social-partner" icon={faTwitter} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={partner.facebook}
              >
                <FontAwesomeIcon className="social-partner" icon={faFacebook} />
              </a>
            </div>
          </Col>
          <Col className="bloc-logo-right">
            <button
              className="btn-link"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <img
                src={partner.image}
                alt="logo-partner"
                className="logo-partner"
              />
            </button>
          </Col>
        </Row>
        <Collapse in={open}>
          <Row id="example-collapse-text" className="pt-5">
            <PartnerDetail partner={partner} />
          </Row>
        </Collapse>
      </Col>
    </Row>
  ) : (
    <Row
      className="bloc-partner2 p-5"
      style={{ backgroundImage: `url("${partner.bgImage}")` }}
    >
      <Col className="offset-2 col-8">
        <Row className="d-flex justify-content-center">
          <Col className="bloc-logo-left">
            <button
              className="btn-link"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <img
                src={partner.image}
                alt="logo-partner"
                className="logo-partner"
              />
            </button>
          </Col>
          <Col>
            <div className="f-flex justify-content-center partner-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="partner-website"
                href={partner.website}
              >
                {partner.website}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={partner.twitter}
              >
                <FontAwesomeIcon className="social-partner" icon={faTwitter} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={partner.facebook}
              >
                <FontAwesomeIcon className="social-partner" icon={faFacebook} />
              </a>
            </div>
          </Col>
        </Row>
        <Collapse in={open}>
          <Row id="example-collapse-text" className="pt-5">
            <PartnerDetail partner={partner} />
          </Row>
        </Collapse>
      </Col>
    </Row>
  );
};

export default PartnerComponent;
