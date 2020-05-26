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
import { fetchAllVision } from "./actions/vision/vision";
import { fetchAllLegal } from "./actions/legal/legal";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(fetchAllPartners());
store.dispatch(fetchAllPlayers());
store.dispatch(fetchAllNav());
store.dispatch(fetchAllFooter());
store.dispatch(fetchAllGames());
store.dispatch(fetchAllVision());
store.dispatch(fetchAllLegal());

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
