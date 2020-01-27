const initialState = {
  images: {
    entries: []
  },
  isLoading: false,
  isSaveGallery: false,
  grid: []
};

  /**
   * getImages Reducer
   * @constructor
   * @alias getImagesReducer
   * @description getImages Reducer
   * @param state intial state of redux
   * @param state.images images from json url
   * @param state.isLoading true when loading json data
   * @param state.isSaveGallery true after save gallery
   * @param state.grid saved grid data from db
   * @param action getImages action
   * @param action.data data return from db
   * @returns state
   */

export const getImages = (state = initialState, action) => {
  switch (action.type) {
    case "GET_IMAGES_START":
      return Object.assign({}, state, {
        isLoading: true
      });
    case "GET_IMAGES_SUCCESS":
      return Object.assign({}, state, {
        images: action.data
      });
    case "GET_IMAGES_END":
    case "GET_IMAGES_FAIL":
    case "GET_IMAGES_CANCEL":
      return Object.assign({}, state, {
        isLoading: false
      });

    default:
      return state;
  }
};

  /**
   * saveGrid Reducer
   * @constructor
   * @alias saveGridReducer
   * @description saveGrid Reducer
   * @returns state
   */

export const saveGrid = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_IMAGES_GRID_START":
      return Object.assign({}, state, {
        isSaveGallery: true
      });
    case "SAVE_IMAGES_GRID_SUCCESS":
      return Object.assign({}, state, {
        grid: action.data
      });
    case "SAVE_IMAGES_GRID_END":
    case "SAVE_IMAGES_GRID_FAIL":
    case "SAVE_IMAGES_GRID_CANCEL":
      return Object.assign({}, state, {
        isSaveGallery: false
      });

    default:
      return state;
  }
};
