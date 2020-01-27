import { all, fork } from "redux-saga/effects";
import { watchGetImagesSaga, watchSaveImagesGridSaga } from "./PhotoGrid";
import { watchLoginSaga } from "./Login";

export default function* rootSaga() {
  yield all([
    watchGetImagesSaga(),
    watchSaveImagesGridSaga(),
    watchLoginSaga()
  ]);
}
