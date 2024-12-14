import { authAxios, publicAxios } from 'axios-config';
import { Constants } from '~theme/Constants';
import { ILoginProps, IRegisterProps } from './types';
import { END_POINT } from '~services/Endpoints';
import { Alert } from 'react-native';


export const registerService = async (data: IRegisterProps) => {
  try {
    const response = await publicAxios.post(END_POINT.REGISTER, data);
    return response?.data;
  } catch (error: any) {
    return error;
  }
};


export const loginService = async (data: ILoginProps) => {
  try {
    const response = await publicAxios.post(END_POINT.LOGIN, data);
    return response?.data;
  } catch (error: any) {
    return error;
  }
};

export const logoutService = async () => {
  try {
    const response = await authAxios.post(END_POINT.LOGOUT);
    return response?.data;
  } catch (error: any) {
    if (error?.response?.status == '401' || error?.response?.status == '403') {
      return { response: null, error: Constants.INVALID_SESSION };
    }
    return error;
  }
};

export const userDetailsService = async () => {
  try {
    const response = await authAxios.get(END_POINT.USER_DETAILS);
    return response?.data;
  } catch (error: any) {
    if (error?.response?.status == '401' || error?.response?.status == '403') {
      return { response: null, error: Constants.INVALID_SESSION };
    }
    return { response: null, error: error };
  }
};