import { FETCH_CDPR } from "../actions/Cdpr/type";

export default function cdprReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CDPR:
      return action.cdpr;
    default:
      return state;
  }
}
