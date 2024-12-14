import { StateCreator } from 'zustand';

export interface IAppSlice {
  isLoading: boolean;
  appLoader: boolean;

  setIsLoading: (isLoading: boolean) => void;
  setAppLoader: (appLoader: boolean) => void;
}

const initialState = {
  isLoading: false,
  appLoader: false,
};

export const createAppSlice: StateCreator<IAppSlice> = set => ({
  ...initialState,
  setIsLoading: (isLoading): void => {
    set({ isLoading });
  },
  setAppLoader: (appLoader): void => {
    set({ appLoader });
  },
});
