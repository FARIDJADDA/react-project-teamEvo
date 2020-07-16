import api from "./../../../app/instance";
import { FETCH_HOME } from "./type";

const fetchHome = (home) => ({
  type: FETCH_HOME,
  home,
});

export const fetchAllHome = () => (dispatch) => {
  api
    .get("onManageHome")
    .then((response) => {
      dispatch(fetchHome(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
