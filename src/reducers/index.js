import { combineReducers } from "redux";
import partners from "./partnersReducers";
import players from "./playersReducers";
import navs from "./navReducers";
import footer from "./footerReducers";
import staff from "./staffReducers";
import games from "./gameReducers";
import cdpr from "./cdprReducers";
import about from "./aboutReducers"

export default combineReducers({
  partners,
  players,
  navs,
  footer,
  staff,
  games,
<<<<<<< HEAD
  cdpr,
=======
  about,
>>>>>>> feature/01
});
