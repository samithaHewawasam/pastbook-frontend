import {
  LOGIN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_END,
  LOGIN_FAIL,
  LOGIN_CANCEL
} from "../constant";

/**
 * @constructor
 * @description Login Actions
 * @alias LoginActions
 * @param data Login Credentials.
 * @param data.username User's username
 * @param data.password User's password
 */

export const login = data => ({
  type: LOGIN,
  data
});

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const loginEnd = () => ({
  type: LOGIN_END
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});

export const loginCancel = () => ({
  type: LOGIN_CANCEL
});
