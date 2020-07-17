import React from "react";
import Players from "./../../components/players/players";
import { useSelector } from "react-redux";
import "./playersContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import WaitData from "./../../components/Spinner/WaitData";

function PlayersList() {
  const players = useSelector((state) => state.players);
  const games = useSelector((state) => state.games);
  const [state, setState] = React.useState({
    game: "overwatch",
  });

  const handleClick = (title) => {
    setState({ game: title });
  };

  if (!players.length || !games.length) {
    return <WaitData />;
  }
  return (
    <>
      <Container fluid className='d-flex flex-column bg-overwatch'>
        <Row className='bg-game'>
          <Col className='offset-2 col-8 d-flex justify-content-center'>
            <Row className='p-2'>
              {games
                .sort((game1, game2) => game1.position - game2.position)
                .map((game, index) => {
                  return (
                    <Col key={index}>
                      <button
                        onClick={() => {
                          handleClick(game.title);
                        }}
                        className={
                          state.game === game.title
                            ? "btn btn-link btn-game activeGame"
                            : "btn btn-link btn-game"
                        }>
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
            <Row className='policeTitle pt-5'>
              <Col md={12} lg={6}>
                <Row>
                  <div className='yellowBox'></div>
                  <h2>ROOSTER GAME</h2>
                </Row>
              </Col>
              <Col md={12} lg={6}>
                <Row className='rightPosition'>
                  <a
                    href='./achievements'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h2 className='titleAchievements'>ACHIEVEMENTS</h2>
                  </a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='offset-2 col-8'>
            <Row className='mb-5 '>
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
