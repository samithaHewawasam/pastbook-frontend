export const getImages = () => ({
  type: "GET_IMAGES"
});

export const getImagesStart = () => ({
  type: "GET_IMAGES_START"
});

export const getImagesSuccess = data => ({
  type: "GET_IMAGES_SUCCESS",
  data
});

export const getImagesFail = error => ({
  type: "GET_IMAGES_FAIL",
  error
});

export const getImagesCancel = () => ({
  type: "GET_IMAGES_CANCEL"
});

export const getImagesEnd = () => ({
  type: "GET_IMAGES_END"
});

export const saveImagesGrid = data => ({
  type: "SAVE_IMAGES_GRID",
  data
});

export const saveImagesGridStart = () => ({
  type: "SAVE_IMAGES_GRID_START"
});

export const saveImagesGridSuccess = data => ({
  type: "SAVE_IMAGES_GRID_SUCCESS",
  data
});

export const saveImagesGridFail = error => ({
  type: "SAVE_IMAGES_GRID_FAIL",
  error
});

export const saveImagesGridCancel = () => ({
  type: "SAVE_IMAGES_GRID_CANCEL"
});

export const saveImagesGridEnd = () => ({
  type: "SAVE_IMAGES_GRID_END"
});
