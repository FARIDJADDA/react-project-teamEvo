import api from "./../../../app/instance";
import { FETCH_STAFF } from "./type";

const fetchStaff = (staff) => ({
  type: FETCH_STAFF,
  staff,
});

export const fetchAllStaff = () => (dispatch) => {
  api
    .get("onManageStaffs")
    .then((response) => {
      dispatch(fetchStaff(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
