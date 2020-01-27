import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"

import { login } from "./Login/Reducer"
import { getImages, saveGrid } from "./PhotoGrid/Reducer"

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  getImages,
  login,
  saveGrid
})
