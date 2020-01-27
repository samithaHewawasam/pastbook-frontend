const initialState = {
  images: {
    entries: []
  },
  isLoading: false,
  isSaveGallery: false,
  grid: []
};

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
