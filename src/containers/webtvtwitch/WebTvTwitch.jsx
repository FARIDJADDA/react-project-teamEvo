import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TwitchComponent from "../../components/components/twitch/TwitchComponent";
import "./webTvTwitch.css";
import { useSelector } from "react-redux";
import StreamerComponent from "../../components/components/twitch/StreamerComponent";

const WebTvTwitch = () => {
  const players = useSelector((state) => state.players);
  return (
    <>
      <Container fluid className='twitch-container'>
        <Row className='d-flex justify-content-center pb-5 pt-4 bg-twitch'>
          <img
            className='logo-evo'
            src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/imageEvo%2Flogo-teamevo.png?alt=media&token=ba39d186-ba00-4912-8a73-33b833c9ff37'
            alt='logo-evo'
          />
        </Row>
        <Row className='d-flex justify-content-center'>
          <TwitchComponent />
        </Row>
        <Row className='tv-buttons d-flex justify-content-center p-4'>
          <a
            className='m-2'
            href='https://www.twitch.tv/subs/teamevotv'
            target='_blank'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/WebTvImage%2Fsub.png?alt=media&token=cc9d1420-345b-4405-bb10-ec5af59b1f77'
              alt='logo-evo'
            />
          </a>
          <a
            className='m-2'
            href='https://m.twitch.tv/teamevotv/'
            target='_blank'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/WebTvImage%2Fteam-evo.png?alt=media&token=75fea16c-aa18-4494-8c1c-87236c104e7c'
              alt='logo-evo'
            />
          </a>
        </Row>
      </Container>

      <Container fluid className='streamers'>
        <Row className='d-flex justify-content-center p-5 streamers-title'>
          NOS STREAMERS
        </Row>
        <Row>
          <Col className='offset-2 col-8'>
            <Row className='p-3'>
              {players
                .filter((player) => player.isStreamer === "true")
                .map((player, index) => {
                  return (
                    <>
                      <StreamerComponent playersData={player} key={index} />
                    </>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WebTvTwitch;
