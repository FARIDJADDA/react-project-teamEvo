import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { fetchAllPartners } from "./store/actions/partners/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchAllPlayers } from "./store/actions/players";
import { fetchAllNav } from "./store/actions/navs/navs";
import { fetchAllFooter } from "./store/actions/footer/footer";
import { fetchAllGames } from "./store/actions/games/game";
import { fetchAllCdpr } from "./store/actions/Cdpr/Cdpr";
import { fetchAllStaff } from "./store/actions/staff/index";
import { fetchAllAbout } from "./store/actions/about/about";
import { fetchAllVision } from "./store/actions/vision/vision";
import { fetchAllLegal } from "./store/actions/legal/legal";
import { fetchAllStaffText } from "./store/actions/staffText.json/index";
import { fetchAllAchievements } from "./store/actions/achievements/achievements";
import { fetchAllHome } from "./store/actions/home/home";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(fetchAllPartners());
store.dispatch(fetchAllPlayers());
store.dispatch(fetchAllNav());
store.dispatch(fetchAllFooter());
store.dispatch(fetchAllGames());
store.dispatch(fetchAllCdpr());
store.dispatch(fetchAllStaff());
store.dispatch(fetchAllAbout());
store.dispatch(fetchAllVision());
store.dispatch(fetchAllLegal());
store.dispatch(fetchAllStaffText());
store.dispatch(fetchAllAchievements());
store.dispatch(fetchAllHome());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
