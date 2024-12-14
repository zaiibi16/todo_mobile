import {authAxios} from 'axios-config';
import {END_POINT} from '~services/Endpoints';
import {IAddTaskProps, IMarkDoneProps} from './types';
import {Constants} from '~theme/Constants';

export const addTaskService = async (data: IAddTaskProps) => {
  try {
    const response = await authAxios.post(END_POINT.ADD_TASK, data);
    return response?.data;
  } catch (error: any) {
    if (error?.response?.status == '401' || error?.response?.status == '403') {
      return {response: null, error: Constants.INVALID_SESSION};
    }
    return error;
  }
};

export const getTasksService = async () => {
  try {
    const response = await authAxios.get(END_POINT.GET_TASKS);
    return response?.data;
  } catch (error: any) {
    if (error?.response?.status == '401' || error?.response?.status == '403') {
      return {response: null, error: Constants.INVALID_SESSION};
    }
    return error;
  }
};

export const markDoneService = async (data: IMarkDoneProps) => {
  try {
    const response = await authAxios.post(END_POINT.MARK_DONE, data);
    return response?.data;
  } catch (error: any) {
    if (error?.response?.status == '401' || error?.response?.status == '403') {
      return {response: null, error: Constants.INVALID_SESSION};
    }
    return error;
  }
};
