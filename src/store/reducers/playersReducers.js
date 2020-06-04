import {FETCH_PLAYERS} from "../actions/players/type";

export default function playersReducer(state = [], action) {
    switch (action.type) {
        case FETCH_PLAYERS:
            return action.players;
        default:
            return state;
    }
}
