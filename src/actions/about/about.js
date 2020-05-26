import api from "../../app/instancedev";
import { FETCH_ABOUT } from "./type";

const fetchAbout = (about) => ({
    type: FETCH_ABOUT,
    about,
  });
  
  export const fetchAllAbout = () => (dispatch) => {
    api
      .get("about.json")
      .then((response) => {
        dispatch(fetchAbout(response.data));
      })
      .catch((e) => {
        throw e;
      });
  };
  

