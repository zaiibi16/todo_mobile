import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createNavigationContainerRef();
export const isMountedRef = createRef();

interface NavigateProps {
  (name: string, params?: Record<string, unknown>): void;
}

interface PopNavigateProps {
  (n: number): void;
}

// Use this function to navigate to specific page when you are outisde of a component
export const navigate: NavigateProps = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
    return;
  }
  // You can decide what to do if the app hasn't mounted
  // You can ignore this, or add these actions to a queue you can call later
};

export const navigatePop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop());
    return;
  }
};

export const popToTop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop());
    return;
  }
};

export const reset: NavigateProps = (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    }),
  );
};

export const back = (): void => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

export const pop: PopNavigateProps = n => {
  navigationRef.current?.dispatch(StackActions.pop(n));
};
