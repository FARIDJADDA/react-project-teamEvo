import api from "./../../../app/instancedev";
import { FETCH_NAV } from "./type";

const fetchNav = (navs) => ({
  type: FETCH_NAV,
  navs,
});

export const fetchAllNav = () => (dispatch) => {
  api
    .get("nav.json")
    .then((response) => {
      dispatch(fetchNav(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
