import api from "../../app/instancedev";
import { FETCH_ACHIEVEMENTS } from "./type";

const fetchAchievements = (achievements) => ({
  type: FETCH_ACHIEVEMENTS,
  achievements,
});

export const fetchAllAchievements = () => (dispatch) => {
  api
    .get("achievements.json")
    .then((response) => {
      dispatch(fetchAchievements(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
