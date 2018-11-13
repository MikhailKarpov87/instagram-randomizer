export default function(state = {}, action) {
  switch (action.type) {
    case "REMOVE_RANDOM_ITEM":
      return [...state, action.payload];

    case "FETCHING_DATA":
    case "FINISH_PICKING":
      return [];

    default:
      return state;
  }
}
