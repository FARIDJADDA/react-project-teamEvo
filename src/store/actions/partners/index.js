import api from "./../../../app/instance";
import { FETCH_PARTNERS } from "./type";

const fetchPartners = (partners) => ({
  type: FETCH_PARTNERS,
  partners,
});

export const fetchAllPartners = () => (dispatch) => {
  api
    .get("onManagePartners")
    .then((response) => {
      dispatch(fetchPartners(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
