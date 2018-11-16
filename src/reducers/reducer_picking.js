import { START_PICKING, FINISH_PICKING } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case START_PICKING:
      return true;

    case FINISH_PICKING:
      return false;

    default:
      return state;
  }
}
