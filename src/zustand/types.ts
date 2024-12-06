import { Draft } from 'immer';

export type setType<T> = (
  nextStateOrUpdater: T | Partial<T> | ((state: Draft<T>) => void),
  shouldReplace?: boolean | undefined,
) => void;

export type persistOptionsType = { name: string; blackList?: Array<string> };
