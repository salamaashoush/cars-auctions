import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const customRequest = axios.create({
  baseURL: process.env.API_URL
});

export const httpClient = {
  get: customRequest.get,
  post: customRequest.post,
  put: customRequest.put,
  delete: customRequest.delete
};

export default httpClient;
