import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeEvery,
  select
} from "redux-saga/effects";

import imagesApi from "../../api/images";

import { constants as imageContants } from "../image/constants";

import imageActions from "../image/actions";

const getPage = state => {
  return state.page;
};

function* handleFetchImages() {
  try {
    const page = yield select(getPage);

    const images = yield call(imagesApi.fetchImages, page);

    yield put(imageActions.setImages(images));

    console.log("page: ", page);
  } catch (error) {
    yield put(imageActions.setError());
  }
}

function* watchfetchImages() {
  yield takeEvery(imageContants.LOAD_REQUEST, handleFetchImages);
}

//watcher sagas -> listens to actions -> invokes worker saga

/**
 * Export the root saga by forking all available sagas.
 */
function* rootSaga() {
  yield all([fork(watchfetchImages)]);
}

export default rootSaga;
