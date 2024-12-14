import {StateCreator} from 'zustand';
import {ITask} from '~components/tasks/taskCard/types';

export interface IAppSlice {
  isLoading: boolean;
  appLoader: boolean;
  taskList: ITask[] | null;
  setIsLoading: (isLoading: boolean) => void;
  setAppLoader: (appLoader: boolean) => void;
  setTaskList: (taskList: ITask[] | null) => void;
}

const initialState = {
  isLoading: false,
  appLoader: false,
  taskList: null,
};

export const createAppSlice: StateCreator<IAppSlice> = set => ({
  ...initialState,
  setIsLoading: (isLoading): void => {
    set({isLoading});
  },
  setAppLoader: (appLoader): void => {
    set({appLoader});
  },
  setTaskList: (taskList): void => {
    set({taskList});
  },
});
