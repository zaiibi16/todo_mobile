import Toaster, {ToastPosition} from 'react-native-toast-message';

const Toast = {
  successor: (text1: string | Array<string>, message?: string) => {
    Toaster.show({
      type: 'successor',
      text1: Array.isArray(text1) ? text1[0] : text1,
      props: {
        message: Array.isArray(text1) ? text1[0] : message,
      },
      position: 'top',
    });
  },
  errorList: (text1: string | Array<string>, errors: Array<string>) => {
    Toaster.show({
      type: 'errorList',
      text1: Array.isArray(text1) ? text1[0] : text1,
      props: {
        errors: errors.length ? errors : [],
      },
      position: 'top',
    });
  },
};
export default Toast;
