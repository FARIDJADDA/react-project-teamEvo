import { FETCH_VISION } from "../actions/vision/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VISION:
      return action.vision;
    default:
      return state;
  }
};
