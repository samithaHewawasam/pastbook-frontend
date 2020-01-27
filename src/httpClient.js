import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: "useCache"
};

const httpClient = axios.create({
  baseURL: "https://dev-pb-apps.s3-eu-west-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
});

const mongoClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
});

const errorInterceptor = error => {
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message);
      break;

    case 401:
      break;

    default:
      console.error(error.response.status, error.message);
  }
  return Promise.reject(error);
};

const responseInterceptor = response => {
  switch (response.status) {
    case 200:
      break;
    default:
  }

  return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);
mongoClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default {
  httpClient,
  mongoClient
};
