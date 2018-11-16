//  Base url for http requests
export const BASE_URL = "https://www.instagram.com";

//  URL for dummy unknown image
export const UNKNOWN_IMG_URL = "/images/notfound_pic.jpg";

//  Actions names
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const START_PICKING = "START_PICKING";
export const REMOVE_RANDOM_ITEM = "REMOVE_RANDOM_ITEM";
export const FINISH_PICKING = "FINISH_PICKING";
export const REMOVE_ALL = "REMOVE_ALL";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const UPDATE_WINNERS_NUM = "UPDATE_WINNERS_NUM";
export const HANDLE_CHANGE_LANGUAGE = "HANDLE_CHANGE_LANGUAGE";
export const HANDLE_UPDATE_INPUT = "HANDLE_UPDATE_INPUT";
export const HANDLE_FETCHING_DATA = "HANDLE_FETCHING_DATA";
export const HANDLE_REMOVE_ALL = "HANDLE_REMOVE_ALL";
export const HANDLE_UPDATE_WINNERS_NUM = "HANDLE_UPDATE_WINNERS_NUM";
export const HANDLE_START_PICKING = "HANDLE_START_PICKING";
export const FETCHING_DATA_DONE = "FETCHING_DATA_DONE";

//  Name of profile pic element on different languages for profiles list copy-paste feature
//  Needed for filterInput function to match and filter profiles names from input text
export const profilePicMatchTexts = [
  "Фото профиля",
  "profile picture",
  "Foto del perfil",
  "Profilbild",
  "Photo de profil"
];
