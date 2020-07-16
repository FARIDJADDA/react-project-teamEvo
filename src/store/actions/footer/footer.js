import api from "./../../../app/instance";
import { FETCH_FOOTER } from "./type";

const fetchFooter = (footer) => ({
  type: FETCH_FOOTER,
  footer,
});

export const fetchAllFooter = () => (dispatch) => {
  api
    .get("onManageFoot")
    .then((response) => {
      dispatch(fetchFooter(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
