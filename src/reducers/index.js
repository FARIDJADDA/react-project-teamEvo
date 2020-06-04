import { combineReducers } from "redux";
import partners from "./partnersReducers";
import players from "./playersReducers";
import navs from "./navReducers";
import footer from "./footerReducers";
import staff from "./staffReducers";
import games from "./gameReducers";
import cdpr from "./cdprReducers";
import about from "./aboutReducers";
import vision from "./visionReducer";
import legal from "./legalReducer";
import staffText from "./staffTextReducers";
import achievements from "./achievementReducers";
import home from "./homeReducers";

export default combineReducers({
  partners,
  players,
  navs,
  footer,
  staff,
  games,
  cdpr,
  about,
  vision,
  legal,
  staffText,
  achievements,
  home,
});
