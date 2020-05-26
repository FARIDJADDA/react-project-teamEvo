import { FETCH_LEGAL } from "../actions/legal/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LEGAL:
      return action.legal;
    default:
      return state;
  }
};
