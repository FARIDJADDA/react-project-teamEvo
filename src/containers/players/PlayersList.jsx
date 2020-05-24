import React from "react";
import Players from "../../components/components/players/players";
import { useSelector } from "react-redux";
import "./playersContainer.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";

function PlayersList() {
  const players = useSelector((state) => state.players);
  const games = useSelector((state) => state.games);
  const [state, setState] = React.useState({ game: "overwatch" });

  const handleClick = (title) => {
    setState({ game: title });
  };

  if (!players.length || !games.length) {
    return (
      <Container fluid>
        <Spinner animation='border' variant='warning' />
      </Container>
    );
  }
  return (
    <>
      <Container fluid className='d-flex flex-column bg-overwatch'>
        <Row className='bg-game'>
          <Col className='offset-2 col-8 d-flex justify-content-center'>
            <Row className='p-2'>
              {games.map((game) => {
                return (
                  <Col>
                    <button
                      onClick={() => handleClick(game.title)}
                      className='btn btn-link btn-game'>
                      <img
                        alt='gameImage'
                        className='gameImage'
                        src={game.image}
                      />
                    </button>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='offset-2 col-8'>
            <Row className='policeTitle'>
              <Col>
                <Row>
                  <div className='yellowBox'></div>
                  <h2>ROOSTER GAME</h2>
                </Row>
              </Col>
              <Col>
                <div className='rightPosition'>
                  <h2 className='titleAchievements'>ACHIEVEMENTS</h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='offset-2 col-8'>
            <Row className='mb-5 justify-content-md-center'>
              {players
                .filter((player) => player.game === state.game)
                .map((player, index) => {
                  return <Players player={player} key={index} />;
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlayersList;
