import api from "./../../../app/instance";
import { FETCH_CDPR } from "./type";

const fetchCdpr = (cdpr) => ({
  type: FETCH_CDPR,
  cdpr,
});

export const fetchAllCdpr = () => (dispatch) => {
  api
    .get("onManageCdpr")
    .then((response) => {
      dispatch(fetchCdpr(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
