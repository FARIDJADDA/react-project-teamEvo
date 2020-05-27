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
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};

export default StreamerComponent;
