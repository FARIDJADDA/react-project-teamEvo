import api from "./../../../app/instance";
import { FETCH_LEGAL } from "./type";

const fetchLegal = (legal) => ({
  type: FETCH_LEGAL,
  legal,
});

export const fetchAllLegal = () => (dispatch) => {
  api
    .get("onManageLegal")
    .then((response) => {
      dispatch(fetchLegal(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
