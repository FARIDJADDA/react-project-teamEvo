import { FETCH_GAME } from "../actions/games/type";

export default function gamesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_GAME:
      return action.games;
    default:
      return state;
  }
}
