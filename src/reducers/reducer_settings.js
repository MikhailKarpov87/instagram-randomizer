export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_WINNERS_NUM":
      return { ...state, winnersNum: +action.payload.winnersNum };

    case "CHANGE_LANGUAGE":
      // console.log(action);
      return { ...state, lang: action.payload };

    default:
      return state;
  }
}
