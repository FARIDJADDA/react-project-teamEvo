import api from "../../app/instancedev";
import { FETCH_GAME } from "./type";

const fetchGames = (games) => ({
  type: FETCH_GAME,
  games,
});

export const fetchAllGames = () => (dispatch) => {
  api
    .get("games.json")
    .then((response) => {
      dispatch(fetchGames(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
