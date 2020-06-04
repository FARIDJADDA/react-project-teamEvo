import React from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import "./AchievementList.css";
import AchievementComponent from "../../components/components/Achievement/AchievementComponent";
import WaitData from "../../components/components/Spinner/WaitData";

function AchievementList() {
  const achievements = useSelector((state) => state.achievements);
  const achievements2020 = achievements.filter(
    (achievements) => achievements.year === "2020"
  );
  const achievements2021 = achievements.filter(
    (achievements) => achievements.year === "2021"
  );

  if (!achievements.length) {
    return <WaitData />;
  }
  return (
    <>
      <Row className="d-flex justify-content-center p-5">
        <div className="achievement-title">
          <h1>Achievements</h1>
          <h2>
            <span className="hashtag-little">#</span>WeAre
            <span style={{ color: "#c8d600" }}>EVO</span>
          </h2>
        </div>
      </Row>
      {achievements2020.length > 0 ? (
        <Row>
          <AchievementComponent title="2k20" achievements={achievements2020} />
        </Row>
      ) : (
        <></>
      )}
      {achievements2021.length > 0 ? (
        <Row>
          <AchievementComponent title="2k21" achievements={achievements2021} />
        </Row>
      ) : (
        <></>
      )}
    </>
  );
}

export default AchievementList;
