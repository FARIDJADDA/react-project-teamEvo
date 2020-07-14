import api from "./../../../app/instance";
import { FETCH_PLAYERS } from "./type";

const fetchPlayers = (players) => ({
  type: FETCH_PLAYERS,
  players,
});

export const fetchAllPlayers = () => (dispatch) => {
  api
    .get("onManagePlayers")
    .then((response) => {
      dispatch(fetchPlayers(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
