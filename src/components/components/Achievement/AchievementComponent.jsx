import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AchievementCommponent.css";

const AchievementComponent = ({ achievements, title }) => {
  return (
    <Col className='offset-3 col-6 achievement-content'>
      <Row className='yellow-bar-content'>
        <div className='yellow-bar'></div>
        <h1 className='year-title'>{title}</h1>
        <div className='yellow-bar'></div>
      </Row>
      {achievements.map((achievement, index) => {
        return (
          <Row key={index} className='achievement-details pb-3 pt-3'>
            <img src={achievement.gameImage} alt='game-logo' />
            <div>
              <p>{achievement.date}</p>
              <p>{achievement.competition}</p>
            </div>
            {achievement.result === 1 ? (
              <div className='result d-flex'>
                <p style={{ fontSize: 48, color: "#c8d600" }}>1</p>
                <p style={{ fontSize: 24, color: "#c8d600" }}>ER</p>
              </div>
            ) : (
              <div className='result d-flex'>
                <p style={{ fontSize: 48, color: "#c8d600" }}>
                  {achievement.result}
                </p>
                <p style={{ fontSize: 24, color: "#c8d600" }}>EME</p>
              </div>
            )}
          </Row>
        );
      })}
    </Col>
  );
};

export default AchievementComponent;
