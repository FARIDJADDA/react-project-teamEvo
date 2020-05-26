import { combineReducers } from "redux";
import partners from "./partnersReducers";
import players from "./playersReducers";
import navs from "./navReducers";
import footer from "./footerReducers";
import staff from "./staffReducers";
import games from "./gameReducers";
import vision from "./visionReducer";
import legal from "./legalReducer";

export default combineReducers({
  partners,
  players,
  navs,
  footer,
  staff,
  games,
  vision,
  legal,
});
