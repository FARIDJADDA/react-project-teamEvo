import api from "../../app/instancedev";
import { FETCH_HOME } from "./type";

const fetchHome = (home) => ({
  type: FETCH_HOME,
  home,
});

export const fetchAllHome = () => (dispatch) => {
  api
    .get("home.json")
    .then((response) => {
      dispatch(fetchHome(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
