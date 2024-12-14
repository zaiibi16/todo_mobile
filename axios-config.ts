import axios, { AxiosError, AxiosResponse } from 'axios';
import * as StorageAccess from '~utils/StorageAccess';

const authAxios = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    MobileApp: true,
  },
});

const publicAxios = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    MobileApp: true,
  },
});

authAxios.interceptors.request.use(
  async config => {
    const token = await StorageAccess.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

authAxios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

publicAxios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

const responseHandler = (res: AxiosResponse) => {
  return res;
};

const errorHandler = (error: AxiosError<any>) => {
  return Promise.reject(error);
};

export { authAxios, publicAxios };
