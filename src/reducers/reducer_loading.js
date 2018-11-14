export default function(state = {}, action) {
  switch (action.type) {
    case "FETCHING_DATA":
      return true;

    case "FETCHING_DATA_DONE":
      return false;

    default:
      return state;
  }
}
