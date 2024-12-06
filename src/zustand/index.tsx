// import zustandFlipper from 'react-native-flipper-zustand';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { StateStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { PersistStateArray } from './PersistState';
import {
  createAuthSlice,
  IAuthSlice,
} from './slices/AuthSlice/CreateAuthSlice';

interface IStore extends IAuthSlice {
  resetState: () => void;
}

const MMKV = new MMKVLoader().withInstanceID('zustand').initialize();

export const useStore = create(
  immer<IStore>(
    // zustandFlipper(
    persist(
      (set, get, api) => ({
        ...createAuthSlice(set, get, api),
        resetState: () => {
          set(state => ({
            ...state,
            // Reset specific slices to their initial state
            ...createAuthSlice(set, get, api),
          }));
        },
      }),
      {
        name: 'transforml',
        version: 1,
        storage: createJSONStorage(() => MMKV as unknown as StateStorage),
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) =>
              PersistStateArray.includes(key),
            ),
          ),
      },
    ),
    // ),
  ),
);
