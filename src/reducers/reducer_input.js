export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_SEARCHTERM":
    case "UPDATE_INPUT":
      return action.payload;

    default:
      return state;
  }
}
