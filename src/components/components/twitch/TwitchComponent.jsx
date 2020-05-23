import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { Row } from "react-bootstrap";

const TwitchComponent = () => {
  return (
    <>
      <Row className='d-flex justify-content-center'>
        <ReactTwitchEmbedVideo
          channel='teamevotv'
          autoplay
          height='600'
          muted={false}
          targetId='twitch-embed'
          width='1000'
        />
      </Row>
    </>
  );
};

export default TwitchComponent;
