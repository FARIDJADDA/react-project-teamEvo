import {FETCH_FOOTER} from "../actions/footer/type";

export default function playersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_FOOTER:
      return action.footer;
    default:
      return state;
  }
}
