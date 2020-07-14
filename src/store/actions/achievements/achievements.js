import api from "./../../../app/instance";
import { FETCH_ACHIEVEMENTS } from "./type";

const fetchAchievements = (achievements) => ({
  type: FETCH_ACHIEVEMENTS,
  achievements,
});

export const fetchAllAchievements = () => (dispatch) => {
  api
    .get("onManageAchievements")
    .then((response) => {
      dispatch(fetchAchievements(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
