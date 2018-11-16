import { CHANGE_LANGUAGE, UPDATE_WINNERS_NUM } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_WINNERS_NUM:
      const { winnersNum, profilesNum } = action.payload;
      //  If winnersNum < 1 or > profilesNum, set winnersNum = 1 to avoid input error
      const resultWinnersNum = winnersNum < 1 || winnersNum >= profilesNum ? 1 : winnersNum;
      return { ...state, winnersNum: +resultWinnersNum };

    case CHANGE_LANGUAGE:
      return { ...state, lang: action.payload };

    default:
      return state;
  }
}
