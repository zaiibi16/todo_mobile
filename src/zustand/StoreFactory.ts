import deepMerge from 'deepmerge';
import {MMKV} from 'react-native-mmkv';
import {create} from 'zustand';
import {
  persist,
  createJSONStorage,
  StateStorage,
  devtools,
} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {setType, persistOptionsType} from './types';

const storage = new MMKV();

export const createStore = <T>(
  setStore: (set: setType<T>) => T,
  persistOptions: persistOptionsType,
) => {
  return create(
    devtools(
      persist(immer<T>(setStore), {
        name: persistOptions.name,
        storage: createJSONStorage(() => zustandStorage),
        partialize: (state: any) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                ![...(persistOptions.blackList ?? []), 'actions'].includes(key),
            ),
          ),
        merge: (persistedState: any, currentState: any) =>
          deepMerge(currentState, persistedState) as T,
      }),
    ),
  );
};

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};
