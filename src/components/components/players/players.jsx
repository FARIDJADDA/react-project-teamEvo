import React from "react";
import "./players.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default ({ player: { firstName, lastName, role, nationality } }) => {
  return (
    <Col className="col-6 col-md-4 d-flex justify-content-center">
      <Row className="player-container">
        <Col className="player-infos">
          <div className="text-grey">
            {firstName} {lastName}
          </div>
          <div className="text-yellow">{role}</div>
          <div className="text-grey">{nationality}</div>
          <div
            style={{
              width: "100%",
              borderTop: "3px solid #b5c200",
              padding: 0,
              margin: "4px 0",
            }}
          />
          <div className="player-social">
            <a href="https://twitter.com/TeamEvoAB">
              <FontAwesomeIcon className="white" icon={faTwitter} />
            </a>
            <a href="https://discord.com/" alt="test">
              <FontAwesomeIcon className="white" icon={faYoutube} />
            </a>
            <a href="https://fr.linkedin.com/company/team-evo-ab" alt="test">
              <FontAwesomeIcon className="white" icon={faTwitch} />
            </a>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
