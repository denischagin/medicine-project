import { localStorageKeys } from "@/shared/constants";
import axios from "axios";

export const URL_BASE = "http://localhost:8083/api/";

axios.defaults.baseURL = URL_BASE;
export const authApi = axios.create({
  baseURL: URL_BASE,
});

authApi.interceptors.request.use((config) => {
  localStorage.getItem(localStorageKeys.tokens);

  return config;
});

authApi.interceptors.response.use(
  (value) => value,
  (error) => {
    const originalRequest = error.config;
  }
);

export default axios;
export const authAxios = authApi;
