import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FINISH_PICKING, REMOVE_ALL } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      const result = action.payload;
      return [...state, result];

    case FINISH_PICKING:
      const { profiles, removedProfiles } = action.payload;
      //  When picking is finished
      //  Returning new array which doesn't contain removed profiles
      const profilesResult = profiles.filter((profile, id) => !removedProfiles.includes(id));
      return profilesResult;

    case FETCHING_DATA:
    case REMOVE_ALL:
      return [];

    default:
      return state;
  }
}
