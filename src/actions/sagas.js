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
  UNKNOWN_PIC_URL
} from "../constants";
import { getProfileImageURL, timeout, filterInput } from "../helpers";
import { all, takeEvery, takeLatest, put, call, select } from "redux-saga/Effects";

export function* rootSaga() {
  yield all([watchChangeLanguage(), watchInputChange(), watchFetchingData()]);
}

//  Watch sagas
function* watchChangeLanguage() {
  yield takeLatest("HANDLE_CHANGE_LANGUAGE", changeLanguage);
}

function* watchInputChange() {
  yield takeLatest("HANDLE_UPDATE_INPUT", handleInput);
}

function* watchFetchingData() {
  yield takeLatest("HANDLE_FETCHING_DATA", handleFetchingData);
}

//  Worker sagas
function* changeLanguage(value) {
  yield put({ type: CHANGE_LANGUAGE, payload: value.payload });
}

function* handleInput(action) {
  //  Filtering textarea input with helper function
  const resultInput = yield filterInput(action.payload);
  yield put({ type: UPDATE_INPUT, payload: resultInput });
}

function* handleFetchingData(action) {
  yield put({ type: FETCHING_DATA });
  const profileNamesArray = action.payload.split("\n").filter(line => !!line);
  const profilesNum = profileNamesArray.length;
  for (let id in profileNamesArray) {
    const { profiles } = yield select();
    const data = yield call(() => {
      return axios
        .get(`${BASE_URL}/${profileNamesArray[id]}/`)
        .then(data => {
          // console.log(data);
          const img_url = getProfileImageURL(data.data) || UNKNOWN_PIC_URL;
          return {
            data: { name: profileNamesArray[id], img: img_url },
            progress: { done: profiles.length + 1, total: profilesNum }
          };
        })
        .catch(error => {
          return {
            data: { name: profileNamesArray[id], img: UNKNOWN_PIC_URL },
            progress: { done: profiles.length + 1, total: profilesNum }
          };
        });
    });
    console.log(data);
    yield put(fetchDataSuccess(data));
  }
}

export function fetchDataSuccess(data) {
  console.log(data);
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: data
  };
}

//Action for getting data from BASE_URL based on search term.
//newRequest argument is flag used to differ new search request
//from pagination requests and sort/filter requests.
export function fetchUsersPicsOld(profileNames) {
  return (dispatch, getState) => {
    dispatch(getData());
    const profileNamesArray = profileNames.split("\n").filter(line => !!line);
    const profilesNum = profileNamesArray.length;
    for (let id in profileNamesArray) {
      // if (!profileNamesArray[id]) continue;
      axios
        // .get(`${BASE_URL}`)
        .get(`${BASE_URL}/${profileNamesArray[id]}/`)
        .then(data => {
          const { profiles } = getState();
          // const img_url = data.data[profileNamesArray[id]] || UNKNOWN_PIC_URL;
          // dispatch(
          //   getDataSuccess({
          //     data: { name: profileNamesArray[id], img: img_url },
          //     progress: { total: profilesNum, done: profiles.length + 1 }
          //   })
          // );

          // const img_url = getProfileImageURL(data.data) || UNKNOWN_PIC_URL;
        })
        .catch(error => {
          const { profiles } = getState();
          //  If profile image fetching was not successful for some reason(network issue, wrong profile name, etc):
          //  then return UNKNOWN_IMG_URL instead
        });
    }
  };
}

//Loading = true while performing request
export function getData() {
  return { type: FETCHING_DATA };
}

export function startPicking(profiles, winnersNum, time) {
  const total = profiles.length;
  let removedProfiles = [];
  return async dispatch => {
    dispatch({ type: START_PICKING });

    for (let i = total; i > winnersNum; i--) {
      //  Generate random number to remove random profile
      let randomId = Math.floor(Math.random() * total);

      //  If random number is in array of deleted profiles - generate random number while it won't be in
      while (removedProfiles.includes(randomId)) {
        randomId = Math.floor(Math.random() * total);
      }
      removedProfiles.push(randomId);

      dispatch({
        type: REMOVE_RANDOM_ITEM,
        payload: randomId
      });
      await timeout(time);
    }
    await timeout(400);
    dispatch({ type: FINISH_PICKING, payload: { removedProfiles, profiles } });
  };
}

export function removeAll() {
  return { type: REMOVE_ALL };
}

export function updateWinnersNum(winnersNum) {
  return {
    type: UPDATE_WINNERS_NUM,
    payload: { winnersNum }
  };
}

export function validateWinnersNum(winnersNum, profilesNum) {
  return {
    type: UPDATE_WINNERS_NUM,
    payload: { winnersNum, profilesNum }
  };
}
