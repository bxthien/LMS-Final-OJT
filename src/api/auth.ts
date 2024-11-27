import instanceAxios from "../config/axios";
import { setStorageData } from "../config/storage";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/auth";
import { User } from "../interface/auth";

export interface SignInPayload {
  email: string;
  password: string;
}

export const signin = (params: SignInPayload) => {
  return new Promise((resolve, reject) => {
    instanceAxios
      .post(`/auth/login`, params)
      .then(({ data: response }) => {
        if (response.access_token) {
          setStorageData(ACCESS_TOKEN, response.access_token);
          setStorageData(REFRESH_TOKEN, response.access_token);
        }
        resolve(response);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getme = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    instanceAxios
      .get<User>(`user/profile`)
      .then(({ data: response }) => {
        if (response) {
          console.log("object", response);
        }
        resolve(response);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
