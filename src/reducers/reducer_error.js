import { UPDATE_WINNERS_NUM } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_WINNERS_NUM:
      const { winnersNum, profilesNum } = action.payload;
      //  Throw 'wrongNumError' error if number of winnersNum is more than profiles number or less than 1
      return winnersNum < 1 || winnersNum >= profilesNum ? "wrongNumError" : false;

    default:
      return state;
  }
}
