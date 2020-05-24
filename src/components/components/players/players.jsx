import React from "react";
import "./players.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default ({ player: { firstName, lastName, role, nationality } }) => {
  return (
    <Col className='col-4 text-center'>
      <div className='player-container'>
        <div className='player-infos'>
          <div>
            {firstName} {lastName}
          </div>
          <div>{role}</div>
          <div>{nationality}</div>
          <div
            style={{
              width: "100%",
              borderTop: "3px solid #b5c200",
              padding: 0,
              margin: "4px 0",
            }}
          />
          <div className='player-social'>
            <a href='https://twitter.com/TeamEvoAB'>
              <FontAwesomeIcon className='white' icon={faTwitter} />
            </a>
            <a href='https://discord.com/' alt='test'>
              <FontAwesomeIcon className='white' icon={faYoutube} />
            </a>
            <a href='https://fr.linkedin.com/company/team-evo-ab' alt='test'>
              <FontAwesomeIcon className='white' icon={faTwitch} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
