const initialState = {
  isLogin: false,
  grid: [],
  username: null
};

  /**
   * Login Reducer
   * @constructor
   * @alias LoginReducer
   * @description Login Reducer
   * @param state intial state of redux
   * @param state.isLogin true after login success
   * @param state.grid saved grid data return from db
   * @param state.username Username return from db
   * @param action login action
   * @param action.data data return from db
   * @returns state
   */

export const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return Object.assign({}, state, {
        isLogin: false
      });
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, {
        isLogin: true,
        username: action.data[0].data[0].username,
        grid: action.data[1].data
      });
    case "LOGIN_FAIL":
    case "LOGIN_CANCEL":
      return Object.assign({}, state, {
        isLogin: false,
        grid: []
      });

    default:
      return state;
  }
};
