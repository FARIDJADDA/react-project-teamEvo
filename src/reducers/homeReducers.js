import { FETCH_HOME } from "../actions/home/type";

export default function homeReducer(state = [], action) {
  switch (action.type) {
    case FETCH_HOME:
      return action.home;
    default:
      return state;
  }
}
