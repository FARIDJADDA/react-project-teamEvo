import { FETCH_ACHIEVEMENTS } from "../actions/achievements/type";

export default function achievementReducers(state = [], action) {
  switch (action.type) {
    case FETCH_ACHIEVEMENTS:
      return action.achievements;
    default:
      return state;
  }
}
