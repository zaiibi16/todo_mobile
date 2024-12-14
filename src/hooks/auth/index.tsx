import {
  loginService,
  logoutService,
  registerService,
  userDetailsService,
} from '~services/auth';
import {useStore} from '~zustand';
import * as StorageAccess from '~utils/StorageAccess';
import {navigate, reset} from '~utils/NavigationUtils';
import {ScreensName, Strings} from '~theme/Strings';
import {ILoginProps, IRegisterProps} from '~services/auth/types';
import Toast from '~utils/Toast';
import {Alert} from 'react-native';

export const useRegisterService = () => {
  const {setAppLoader} = useStore(state => state);

  const registerUser = async (data: IRegisterProps) => {
    setAppLoader(true);
    try {
      const registerResponse = await registerService(data);
      if (registerResponse?.success) {
        Toast.successor(Strings.SUCCESS, registerResponse?.data?.message);
        navigate(ScreensName.LoginScreen);
      } else {
        Toast.errorList(Strings.ERROR, [registerResponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };

  return {registerUser};
};

export const useLoginService = () => {
  const {setAppLoader, setIsAuth, setUserData} = useStore(state => state);

  const loginUser = async (data: ILoginProps) => {
    setAppLoader(true);
    try {
      const loginResponse = await loginService(data);
      if (loginResponse?.success) {
        await StorageAccess.storeToken(loginResponse?.data?.accessToken);
        setIsAuth(true);
        setUserData({
          username: loginResponse?.response?.username,
          user_id: loginResponse?.response?.id,
        });
        reset(ScreensName.AppStackScreen);
      } else {
        Toast.errorList(Strings.ERROR, [loginResponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };

  return {loginUser};
};

export const useLogoutService = () => {
  const {setAppLoader, setIsAuth, setUserData} = useStore(state => state);

  const logoutUser = async () => {
    setAppLoader(true);
    try {
      const registerResponse = await logoutService();
      if (registerResponse?.success) {
        await StorageAccess.clearToken();
        Toast.successor(Strings.SUCCESS, registerResponse?.data?.message);
        setIsAuth(false);
        setUserData(null);
        reset(ScreensName.AuthStackScreen);
      } else {
        Toast.errorList(Strings.ERROR, [registerResponse?.error?.message]);
      }
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };

  return {logoutUser};
};

export const useSessionExipred = () => {
  const {setAppLoader, setIsAuth, setUserData} = useStore(state => state);

  const logoutUser = async () => {
    setAppLoader(true);
    Alert.alert(Strings.SESSIONEXPIRED, Strings.LOGINAGAIN, [
      {
        text: Strings.OK,
        onPress: async () => {
          try {
            setAppLoader(false);
            await StorageAccess.clearToken();
            setIsAuth(false);
            setUserData(null);
            reset(ScreensName.AuthStackScreen);
          } catch (e) {
            setAppLoader(false);
            console.error(e);
          }
        },
      },
    ]);
  };

  return {logoutUser};
};

export const useUserDetailsService = () => {
  const {setAppLoader} = useStore(state => state);

  const userDetails = async () => {
    setAppLoader(true);
    try {
      await userDetailsService();
      setAppLoader(false);
    } catch (e) {
      setAppLoader(false);
      Toast.errorList(Strings.ERROR, ['Error', e]);
      console.log(e);
    }
  };

  return {userDetails};
};
