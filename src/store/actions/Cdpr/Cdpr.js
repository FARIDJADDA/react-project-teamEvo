import api from "./../../../app/instancedev";
import { FETCH_CDPR } from "./type";

const fetchCdpr = (cdpr) => ({
  type: FETCH_CDPR,
  cdpr,
});

export const fetchAllCdpr = () => (dispatch) => {
  api
    .get("Cdpr.json")
    .then((response) => {
      dispatch(fetchCdpr(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
