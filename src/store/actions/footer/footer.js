import api from "./../../../app/instancedev";
import { FETCH_FOOTER } from "./type";

const fetchFooter = (footer) => ({
  type: FETCH_FOOTER,
  footer,
});

export const fetchAllFooter = () => (dispatch) => {
  api
    .get("foot.json")
    .then((response) => {
      dispatch(fetchFooter(response.data));
    })
    .catch((e) => {
      throw e;
    });
};
