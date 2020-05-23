import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const StreamerComponent = ({ playersData }) => {
  return (
    <>
      <Col className='col-4 p-2 color-white'>
        <Row className='d-flex justify-content-center'>
          <div className='p-1'>{playersData.nickName}</div>
        </Row>
        <Row className='d-flex justify-content-center'>
          <a className='p-1' href={playersData.youtube}>
            <FontAwesomeIcon className='color-white' icon={faYoutube} />
          </a>
          <a className='p-1' href={playersData.twitter}>
            <FontAwesomeIcon className='color-white' icon={faTwitter} />
          </a>
          <a className='p-1' href={playersData.twitch}>
            <FontAwesomeIcon className='color-white' icon={faTwitch} />
          </a>
        </Row>
      </Col>
    </>
  );
};

export default StreamerComponent;
