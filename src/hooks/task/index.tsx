import {useState} from 'react';
import {ITask} from '~components/tasks/taskCard/types';
import {useSessionExipred} from '~hooks/auth';
import {addTaskService, getTasksService, markDoneService} from '~services/task';
import {IAddTaskProps, IMarkDoneProps} from '~services/task/types';
import {Constants} from '~theme/Constants';
import {ScreensName, Strings} from '~theme/Strings';
import {back, navigate} from '~utils/NavigationUtils';
import Toast from '~utils/Toast';
import {useStore} from '~zustand';

export const useAddTaskService = () => {
  const {setAppLoader} = useStore(state => state);
  const {logoutUser} = useSessionExipred();

  const addTask = async (data: IAddTaskProps) => {
    setAppLoader(true);
    try {
      const addTaskresponse = await addTaskService(data);
      if (addTaskresponse?.error === Constants.INVALID_SESSION) {
        logoutUser();
      }
      if (addTaskresponse?.success) {
        Toast.successor(Strings.SUCCESS, addTaskresponse?.data?.message);
        back();
      } else {
        Toast.errorList(Strings.ERROR, [addTaskresponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };
  return {addTask};
};

export const useGetTasksService = () => {
  const {setAppLoader, setTaskList} = useStore(state => state);
  const {logoutUser} = useSessionExipred();

  const getTasks = async () => {
    setAppLoader(true);
    try {
      const getTasksResponse = await getTasksService();
      if (getTasksResponse?.error === Constants.INVALID_SESSION) {
        logoutUser();
      }
      if (getTasksResponse?.success) {
        setTaskList(getTasksResponse?.data?.tasks);
      } else {
        Toast.errorList(Strings.ERROR, [getTasksResponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };
  return {getTasks};
};

export const useMarkDoneService = () => {
  const {setAppLoader} = useStore(state => state);
  const {getTasks} = useGetTasksService();
  const {logoutUser} = useSessionExipred();

  const markDone = async (data: IMarkDoneProps) => {
    setAppLoader(true);
    try {
      const markDoneResponse = await markDoneService(data);
      if (markDoneResponse?.error === Constants.INVALID_SESSION) {
        logoutUser();
      }
      if (markDoneResponse?.success) {
        Toast.successor(Strings.SUCCESS, markDoneResponse?.data?.message);
        getTasks();
      } else {
        Toast.errorList(Strings.ERROR, [markDoneResponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };
  return {markDone};
};
