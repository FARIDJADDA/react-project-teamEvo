import { FETCH_NAV } from "../actions/navs/type";

export default function navReducer(state = [], action) {
  switch (action.type) {
    case FETCH_NAV:
      return action.navs;
    default:
      return state;
  }
}
