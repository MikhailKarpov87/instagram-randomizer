export default function(state = {}, action) {
  switch (action.type) {
    case "START_PICKING":
      return true;

    case "FINISH_PICKING":
      return false;

    default:
      return state;
  }
}
