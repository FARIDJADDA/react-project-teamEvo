import React from "react";
import { Col } from "react-bootstrap";
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
        <div type='button' className='activePlayer'>
          <div className='d-flex justify-content-center p-1'>
            {playersData.nickName}
          </div>
          <div className='d-flex justify-content-center'>
            <a className='p-1' href={playersData.youtube}>
              <FontAwesomeIcon className='color-white' icon={faYoutube} />
            </a>
            <a className='p-1' href={playersData.twitter}>
              <FontAwesomeIcon className='color-white' icon={faTwitter} />
            </a>
            <a className='p-1' href={playersData.twitch}>
              <FontAwesomeIcon className='color-white' icon={faTwitch} />
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};

export default StreamerComponent;
