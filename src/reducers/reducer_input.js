import { UPDATE_INPUT } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.payload;

    default:
      return state;
  }
}
