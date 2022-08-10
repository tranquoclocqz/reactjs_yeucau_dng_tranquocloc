import axios from 'axios';
import queryString from 'query-string';
import { BASE_URL } from "../constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: params => queryString.stringify(params),
});
// Handle token
axiosClient.interceptors.request.use(async (config) => {
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;