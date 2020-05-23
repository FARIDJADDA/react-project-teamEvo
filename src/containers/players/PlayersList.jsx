import React from "react";
import Players from "../../components/components/players/players";
import { useSelector } from "react-redux";
import "./playersContainer.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";

function PlayersList() {
  const players = useSelector((state) => state.players);

  if (!players.length) {
    return (
      <Container fluid>
        <Spinner animation='border' variant='warning' />
      </Container>
    );
  }
  return (
    <Container fluid className='d-flex flex-column bg-overwatch'>
      <Row>
        <Col className='offset-2 col-8'>
          <div className='teams-header w-75'>
            <h2>ROOSTER GAME</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='offset-2 col-8'>
          <Row className='mb-5'>
            {players
              .filter((player) => player.game === "overwatch")
              .map((player, index) => {
                return <Players player={player} key={index} />;
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PlayersList;
