import api from "./../../../app/instance";
import { FETCH_STAFF_TEXT } from "./type";

const fetchStaffText = (staffText) => ({
  type: FETCH_STAFF_TEXT,
  staffText,
});

export const fetchAllStaffText = () => (dispatch) => {
  api
    .get("onManageStaffText")
    .then((response) => {
      dispatch(fetchStaffText(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
