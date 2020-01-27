import { put, all, takeLatest, call, cancelled } from "redux-saga/effects";
import {
  loginStart,
  loginSuccess,
  loginFail,
  loginCancel,
  loginEnd
} from "./Actions";
import { login } from "./Services";
import { toast } from "react-toastify";
import { push } from 'connected-react-router'

function* loginSaga(action) {
  try {
    yield put(loginStart());
    const reponse = yield call(login, action.data);
    if (reponse.length != 2) {
      throw new Error("REST response must two objects");
    }
    if (reponse[0].data.length > 0) {
      toast.success("Login Success", {
        position: toast.POSITION.TOP_RIGHT
      });
      yield put(loginSuccess(reponse));

      yield put(push('/your-galleries'))

    } else {
      const error = "Username and password incorrect";
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
      yield put(loginFail(error));
    }

    yield put(loginEnd());
  } catch (error) {
    console.log(error);
    yield put(loginFail(error));
  } finally {
    if (yield cancelled()) {
      yield put(loginCancel);
      return;
    }
  }
}

export function* watchLoginSaga() {
  yield all([takeLatest("LOGIN", loginSaga)]);
}
