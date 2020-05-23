import {
  ADD_PARTNERS,
  DELETE_PARTNERS,
  FETCH_PARTNERS,
} from "../actions/partners/type";
/**
 * @param  {} state=[] intitialize the state as void array
 * @param  {} action   contain the action
 */
export default function partnersReducer(state = [], action) {
  switch (action.type) {
    case ADD_PARTNERS:
      return [...state, action.payload];
    case DELETE_PARTNERS:
      return state.filter((partners) => partners.id !== action.payload.id);
    // fetch = get ou aller chercher en langue de Molière
    case FETCH_PARTNERS:
      return action.partners;
    default:
      return state;
  }
}
