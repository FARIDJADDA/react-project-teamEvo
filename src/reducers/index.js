import { combineReducers } from "redux";
import partners from "./partnersReducers";
import players from "./playersReducers";
import navs from "./navReducers";
import footer from "./footerReducers";
import staff from "./staffReducers";

export default combineReducers({
  partners,
  players,
  navs,
  footer,
  staff,
});
