import { FETCH_STAFF_TEXT } from "./../actions/staffText.json/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STAFF_TEXT:
      return action.staffText;
    default:
      return state;
  }
};
