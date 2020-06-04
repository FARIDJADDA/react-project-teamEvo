import api from "./../../../app/instancedev";
import { FETCH_STAFF } from "./type";

const fetchStaff = (staff) => ({
  type: FETCH_STAFF,
  staff,
});

export const fetchAllStaff = () => (dispatch) => {
  api
    .get("staff.json")
    .then((response) => {
      dispatch(fetchStaff(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
