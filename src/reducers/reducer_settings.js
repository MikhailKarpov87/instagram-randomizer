export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_WINNERS_NUM":
      const { winnersNum, profilesNum } = action.payload;
      const resultWinnersNum = winnersNum < 1 || winnersNum >= profilesNum ? 1 : winnersNum;
      return { ...state, winnersNum: +resultWinnersNum };

    case "CHANGE_LANGUAGE":
      // console.log(action);
      return { ...state, lang: action.payload };

    default:
      return state;
  }
}
