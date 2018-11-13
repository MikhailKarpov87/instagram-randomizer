export default function(state = {}, action) {
  switch (action.type) {
    case "FETCHING_DATA":
      return true;

    case "FETCHING_DATA_SUCCESS":
      const { total, done } = action.payload.progress;
      return done !== total;

    default:
      return state;
  }
}
