import {StateCreator} from 'zustand';

import {IUserData} from './authTypes';

export interface IAuthSlice {
  isAuth: boolean;
  userData: IUserData | null;
  setIsAuth: (isAuth: boolean) => void;
  setUserData: (userData: IUserData | null) => void;
}

const initialState = {
  isAuth: false,
  userData: null,
  lastLogin: null,
};

export const createAuthSlice: StateCreator<IAuthSlice> = set => ({
  ...initialState,
  setIsAuth: (isAuth): void => {
    set({isAuth});
  },
  setUserData: (userData: IUserData | null): void => {
    set({userData: userData});
  },
});
