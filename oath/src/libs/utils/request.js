import axios from "axios";
import qs from "qs";

let env = process.env.NODE_ENV;

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : process.env.NODE_ENV === "production"
    ? "http://120.55.43.25:8088/"
    : "";
let fetch = axios.create({
  baseURL: baseURL,
  timeout: 50000, // request timeout
});
fetch.interceptors.request.use(
  (config) => {
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      if (
        typeof config.data !== "string" &&
        config.headers["Content-Type"] !== "multipart/form-data"
      ) {
        config.data = qs.stringify(config.data);
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  async (data) => {
    return data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 500) {
        console.log("服务器错误，请联系管理员处理");
      }
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

export default fetch;
