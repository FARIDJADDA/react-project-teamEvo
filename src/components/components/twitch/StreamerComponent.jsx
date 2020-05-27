import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const StreamerComponent = ({ playersData, stateId, handleClick }) => {
  return (
    <>
      <Col className='col-4 p-2'>
        <div
          type='button'
          className={
            playersData.id === stateId ? "activePlayer" : "hoverPlayer"
          }
          onClick={() => handleClick(playersData.id, playersData.channelName)}>
          <div className='d-flex justify-content-center p-1'>
            {playersData.nickName}
          </div>
          <div className='d-flex justify-content-center'>
<<<<<<< HEAD
            <a className='p-1' href={playersData.youtube}>
              <FontAwesomeIcon color='white' icon={faYoutube} />
            </a>
            <a className='p-1' href={playersData.twitter}>
              <FontAwesomeIcon color='white' icon={faTwitter} />
            </a>
            <a className='p-1' href={playersData.twitch}>
              <FontAwesomeIcon color='white' icon={faTwitch} />
=======
            <a
              className='p-1'
              href={playersData.youtube}
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                className={
                  playersData.id === stateId
                    ? "activePlayer"
                    : "color-white hoverPlayer"
                }
                icon={faYoutube}
              />
            </a>
            <a
              className='p-1'
              href={playersData.twitter}
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                className={
                  playersData.id === stateId
                    ? "activePlayer"
                    : "color-white hoverPlayer"
                }
                icon={faTwitter}
              />
            </a>
            <a
              className='p-1'
              href={playersData.twitch}
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                className={
                  playersData.id === stateId
                    ? "activePlayer"
                    : "color-white hoverPlayer"
                }
                icon={faTwitch}
              />
>>>>>>> c1e74a1914603e70e7c9ef524347f986e04421d9
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};

export default StreamerComponent;
