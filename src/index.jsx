import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { fetchAllPartners } from "./actions/partners/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchAllPlayers } from "./actions/players";
import { fetchAllNav } from "./actions/navs/navs";
import { fetchAllFooter } from "./actions/footer/footer";
import { fetchAllGames } from "./actions/games/game";
import { fetchAllCdpr } from "./actions/Cdpr/Cdpr";
import { fetchAllStaff } from "./actions/staff/index";
import { fetchAllAbout } from "./actions/about/about";
import { fetchAllVision } from "./actions/vision/vision";
import { fetchAllLegal } from "./actions/legal/legal";
import { fetchAllAchievements } from "./actions/achievements/achievements";

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
store.dispatch(fetchAllAchievements());

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
