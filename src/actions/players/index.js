import api from "../../app/instancedev";
import { FETCH_PLAYERS } from "./type";

const fetchPlayers = (players) => ({
  type: FETCH_PLAYERS,
  players,
});

export const fetchAllPlayers = () => (dispatch) => {
  api
    .get("players.json")
    .then((response) => {
      dispatch(fetchPlayers(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
