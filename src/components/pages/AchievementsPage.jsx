import React from "react";
import { Container } from "react-bootstrap";
import AchievementList from "../containers/achievements/AchievementList";

const AchievementsPage = () => {
  return (
    <>
      <Container fluid className='bg-cup'>
        <AchievementList />
      </Container>
    </>
  );
};

export default AchievementsPage;
