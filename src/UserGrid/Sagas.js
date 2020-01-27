import { put, all, takeLatest, call, cancelled } from "redux-saga/effects";
import {
  getImagesStart,
  getImagesSuccess,
  getImagesFail,
  getImagesCancel,
  getImagesEnd,
  saveImagesGridStart,
  saveImagesGridSuccess,
  saveImagesGridFail,
  saveImagesGridCancel,
  saveImagesGridEnd
} from "./Actions";
import { getImages, saveImagesGrid } from "./Services";
import { toast } from "react-toastify";

function* getImagesSaga() {
  try {
    yield put(getImagesStart());
    const { data } = yield call(getImages);
    if (!data) {
      throw new Error("REST response must contain a data key");
    }
    yield put(getImagesSuccess(data));
    yield put(getImagesEnd());
  } catch (error) {
    yield put(getImagesFail(error));
  } finally {
    if (yield cancelled()) {
      yield put(getImagesCancel);
      return;
    }
  }
}

export function* watchGetImagesSaga() {
  yield all([takeLatest("GET_IMAGES", getImagesSaga)]);
}

function* saveImagesGridSaga(action) {
  try {
    yield put(saveImagesGridStart());
    const { data } = yield call(saveImagesGrid, action.data);
    if (!data) {
      throw new Error("REST response must contain a data key");
    }
    yield put(saveImagesGridSuccess(data));
    toast.success("Gallery Saved", {
      position: toast.POSITION.TOP_RIGHT
    });
    yield put(saveImagesGridEnd());
  } catch (error) {
    yield put(saveImagesGridFail(error));
    toast.error("Something wrong", {
      position: toast.POSITION.TOP_RIGHT
    });
  } finally {
    if (yield cancelled()) {
      yield put(saveImagesGridCancel());
      toast.error("Something wrong", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
  }
}

export function* watchSaveImagesGridSaga() {
  yield all([takeLatest("SAVE_IMAGES_GRID", saveImagesGridSaga)]);
}
