import api from "./../../../app/instance";
import { FETCH_VISION } from "./type";

const fetchVision = (vision) => ({
  type: FETCH_VISION,
  vision,
});

export const fetchAllVision = () => (dispatch) => {
  api
    .get("onManageValues")
    .then((response) => {
      dispatch(fetchVision(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
