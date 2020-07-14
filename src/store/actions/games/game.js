import api from "./../../../app/instance";
import { FETCH_GAME } from "./type";

const fetchGames = (games) => ({
  type: FETCH_GAME,
  games,
});

export const fetchAllGames = () => (dispatch) => {
  api
    .get("onManageGames")
    .then((response) => {
      dispatch(fetchGames(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
