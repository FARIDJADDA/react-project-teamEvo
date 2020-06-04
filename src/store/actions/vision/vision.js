import api from "./../../../app/instancedev";
import { FETCH_VISION } from "./type";

const fetchVision = (vision) => ({
  type: FETCH_VISION,
  vision,
});

export const fetchAllVision = () => (dispatch) => {
  api
    .get("vision.json")
    .then((response) => {
      dispatch(fetchVision(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
