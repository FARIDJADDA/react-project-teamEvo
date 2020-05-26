import api from "../../app/instancedev";
import { FETCH_LEGAL } from "./type";

const fetchLegal = (legal) => ({
  type: FETCH_LEGAL,
  legal,
});

export const fetchAllLegal = () => (dispatch) => {
  api
    .get("legal.json")
    .then((response) => {
      dispatch(fetchLegal(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
