import { FETCH_ABOUT } from "../actions/about/type"

export default function aboutReducers (state = [], action) {
    switch (action.type) {
      case FETCH_ABOUT:
        return action.about;
      default:
        return state;
    }
  }