import Axios from "axios";
import qs from "query-string";

const apikey = "05ce4f8b2518179b0e3500ec6d2a9cf9";
const createAxiosInstance = (url, contentType) =>
  Axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
    timeout: 180000,
    headers: { "Content-Type": contentType || "application/json" }
  });

const interceptorBeforeRequest = instance => {
  instance.interceptors.request.use(
    config => {
      config.params = config.params || {};
      config.params = {
        units: "metric",
        appid: apikey
      };
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
};

const api = url => {
  const apiInstance = createAxiosInstance(url);

  interceptorBeforeRequest(apiInstance);

  return {
    get: (url, params) => {
      const query = qs.stringify(params);
      return apiInstance.get(`${url}?${query}`);
    },
    post: (url, data, timeout) =>
      apiInstance.post(url, data, { timeout: timeout }),
    patch: (url, data) => apiInstance.patch(url, data),
    delete: (url, data) => apiInstance.delete(url, data),
    put: (url, data) => apiInstance.put(url, data)
  };
};

export default api();
