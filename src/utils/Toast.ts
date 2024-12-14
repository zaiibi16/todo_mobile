import Toaster, { ToastPosition } from 'react-native-toast-message';

const Toast = {
  successor: (
    text1: string | Array<string>,
    message?: string,
    position?: ToastPosition,
    topOffset?: number,
  ) => {
    Toaster.show({
      type: 'successor',
      text1: Array.isArray(text1) ? text1[0] : text1,
      props: {
        message: Array.isArray(text1) ? text1[0] : message,
      },
      position: position ? position : 'bottom',
      topOffset: topOffset,
    });
  },
  errorList: (
    text1: string | Array<string>,
    errors: Array<string>,
    position?: ToastPosition,
    topOffset?: number,
  ) => {
    Toaster.show({
      type: 'errorList',
      text1: Array.isArray(text1) ? text1[0] : text1,
      props: {
        errors: errors.length ? errors : [],
      },
      position: position ? position : 'bottom',
      topOffset: topOffset,
    });
  },
};
export default Toast;
