import {FETCH_STAFF} from "../actions/staff/type";

export default function staffReducer(state = [], action) {
  switch (action.type) {
    case FETCH_STAFF:
      return action.staff;
    default:
      return state;
  }
}
