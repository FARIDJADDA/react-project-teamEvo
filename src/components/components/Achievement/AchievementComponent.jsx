import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AchievementCommponent.css";

const AchievementComponent = ({ achievements, title }) => {
  return (
    <Col md={12} lg={6} className='achievement-content'>
      <Row className='yellow-bar-content'>
        <div className='yellow-bar'></div>
        <h1 className='year-title'>{title}</h1>
        <div className='yellow-bar'></div>
      </Row>
      {achievements
        .sort((elem1, elem2) => elem1.result - elem2.result)
        .map((achievement, index) => {
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
                  <p style={{ fontSize: 24, color: "#c8d600" }}>ER</p>
                </div>
              )}
            </Row>
          );
        })}
    </Col>
  );
};

export default AchievementComponent;
