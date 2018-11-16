import { FETCHING_DATA, FINISH_PICKING, REMOVE_ALL } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FINISH_PICKING:
      const { profiles, removedProfiles } = action.payload;
      const winners = profiles.filter((profile, id) => !removedProfiles.includes(id));
      const result = winners.map(value => value.name);
      return result;

    case REMOVE_ALL:
    case FETCHING_DATA:
      return [];

    default:
      return state;
  }
}
