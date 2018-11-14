import {
  HANDLE_CHANGE_LANGUAGE,
  HANDLE_UPDATE_INPUT,
  HANDLE_FETCHING_DATA,
  HANDLE_REMOVE_ALL,
  HANDLE_UPDATE_WINNERS_NUM,
  HANDLE_START_PICKING
} from "../constants";

export function changeLanguage(value) {
  return { type: HANDLE_CHANGE_LANGUAGE, payload: value };
}

export function handleInput(input) {
  return { type: HANDLE_UPDATE_INPUT, payload: input };
}

export function fetchProfilesPics(profileNames) {
  return { type: HANDLE_FETCHING_DATA, payload: profileNames };
}

export function removeAll() {
  return { type: HANDLE_REMOVE_ALL };
}

export function updateWinnersNum(winnersNum, profilesNum) {
  return { type: HANDLE_UPDATE_WINNERS_NUM, payload: { winnersNum, profilesNum } };
}

export function startPicking(profiles, winnersNum, time) {
  return { type: HANDLE_START_PICKING, payload: { profiles, winnersNum, time } };
}
