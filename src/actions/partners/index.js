import api from "../../app/instancedev";
import { FETCH_PARTNERS } from "./type";

const fetchPartners = (partners) => ({
  type: FETCH_PARTNERS,
  partners,
});

export const fetchAllPartners = () => (dispatch) => {
  api
    .get("partners.json")
    .then((response) => {
      dispatch(fetchPartners(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
