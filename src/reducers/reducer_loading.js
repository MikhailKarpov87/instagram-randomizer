import { FETCHING_DATA, FETCHING_DATA_DONE } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return true;

    case FETCHING_DATA_DONE:
      return false;

    default:
      return state;
  }
}
