import axios from "axios";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  UPDATE_INPUT,
  START_PICKING,
  REMOVE_RANDOM_ITEM,
  FINISH_PICKING,
  REMOVE_ALL,
  CHANGE_LANGUAGE,
  UPDATE_WINNERS_NUM,
  BASE_URL,
  UNKNOWN_PIC_URL,
  HANDLE_CHANGE_LANGUAGE,
  HANDLE_UPDATE_INPUT,
  HANDLE_FETCHING_DATA,
  HANDLE_REMOVE_ALL,
  HANDLE_UPDATE_WINNERS_NUM,
  HANDLE_START_PICKING
} from "../constants";
import { getProfileImageURL, filterInput } from "../helpers";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

export function* rootSaga() {
  yield all([
    watchChangeLanguage(),
    watchInputChange(),
    watchFetchingData(),
    watchRemoveAll(),
    watchUpdateWinnersNum(),
    watchStartPicking()
  ]);
}

//  Watch sagas
function* watchChangeLanguage() {
  yield takeLatest(HANDLE_CHANGE_LANGUAGE, changeLanguage);
}

function* watchInputChange() {
  yield takeLatest(HANDLE_UPDATE_INPUT, handleInput);
}

function* watchFetchingData() {
  yield takeLatest(HANDLE_FETCHING_DATA, handleFetchingData);
}

function* watchRemoveAll() {
  yield takeLatest(HANDLE_REMOVE_ALL, removeAll);
}

function* watchUpdateWinnersNum() {
  yield takeLatest(HANDLE_UPDATE_WINNERS_NUM, handleUpdateWinnersNum);
}

function* watchStartPicking() {
  yield takeLatest(HANDLE_START_PICKING, startPicking);
}

//  Worker sagas
function* changeLanguage(value) {
  yield put({ type: CHANGE_LANGUAGE, payload: value.payload });
}

function* handleInput(action) {
  const resultInput = yield filterInput(action.payload);
  yield put({ type: UPDATE_INPUT, payload: resultInput });
}

function* removeAll() {
  yield put({ type: REMOVE_ALL });
}

function* handleUpdateWinnersNum(action) {
  const { winnersNum, profilesNum } = action.payload;
  yield put({ type: UPDATE_WINNERS_NUM, payload: { winnersNum, profilesNum } });
}

function* handleFetchingData(action) {
  yield put({ type: FETCHING_DATA });
  const profileNamesArray = action.payload.split("\n").filter(line => !!line);
  const responses = yield all(
    profileNamesArray.map(profile => {
      return call(() => {
        return axios
          .get(`${BASE_URL}/${profile}/`)
          .then(data => {
            const img_url = getProfileImageURL(data.data) || UNKNOWN_PIC_URL;
            return { name: profile, img: img_url };
          })
          .catch(error => {
            return { name: profile, img: UNKNOWN_PIC_URL };
          });
      });
    })
  );

  yield all(responses.map(response => put({ type: FETCHING_DATA_SUCCESS, payload: response })));
  yield put({ type: "FETCHING_DATA_DONE" });
}

export function* startPicking(action) {
  const { profiles, winnersNum, time } = action.payload;
  const total = profiles.length;
  let removedProfiles = [];

  yield put({ type: START_PICKING });

  for (let i = total; i > winnersNum; i--) {
    //  Generate random number to remove random profile
    let randomId = Math.floor(Math.random() * total);

    //  If random number is in array of deleted profiles - generate random number while it won't be in
    while (removedProfiles.includes(randomId)) {
      randomId = Math.floor(Math.random() * total);
    }
    removedProfiles.push(randomId);

    yield put({ type: REMOVE_RANDOM_ITEM, payload: randomId });
    yield delay(time);
  }

  yield delay(400);
  yield put({ type: FINISH_PICKING, payload: { removedProfiles, profiles } });
}
