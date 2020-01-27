import API from "../httpClient";
const USER_END_POINT = "/users";
const END_POINT = "/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json";

export const getImages = () => API.httpClient.get(END_POINT);
export const saveImagesGrid = (data) => API.mongoClient.post(`${USER_END_POINT}/${data.username}/pastbooks`, data);
