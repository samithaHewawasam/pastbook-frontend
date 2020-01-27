import API from "../httpClient";
const USER_END_POINT = "/users";

export const login = data =>
  Promise.all([
    API.mongoClient.get(USER_END_POINT, {
      params: {
        filter: { ...data }
      }
    }),
    API.mongoClient.get(`${USER_END_POINT}/${data.where.username}/pastbooks`)
  ]);
