import axios from "axios";
import { localStorageKeys } from "@/shared/constants";

axios.defaults.baseURL = "https://localhost:5000/api/";
export const authApi = axios.create();

authApi.interceptors.request.use(
  (config) => {
    localStorage.getItem(localStorageKeys.tokens);

    return config;
  },
  (error) => {}
);

export default axios;
export const authAxios = authApi