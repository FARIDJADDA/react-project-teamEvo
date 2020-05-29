import api from "../../app/instancedev";
import { FETCH_STAFF_TEXT } from "./type";

const fetchStaffText = (staffText) => ({
  type: FETCH_STAFF_TEXT,
  staffText,
});

export const fetchAllStaffText = () => (dispatch) => {
  api
    .get("staffText.json")
    .then((response) => {
      dispatch(fetchStaffText(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
