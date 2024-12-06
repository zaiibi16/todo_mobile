import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useTheme } from '~theme/ThemeContext';
import { reset } from '~utils/NavigationUtils';
import { ScreensName } from '~theme/Strings';
import { useStore } from '~zustand';

const SplashScreen = () => {
  const { isAuth } = useStore(state => state);
  // const { logoutUser } = useSessionExipred();

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset(
        false ? ScreensName.AppStackScreen : ScreensName.AuthStackScreen,
        {},
      );
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isAuth]);

  return (
    <View style={styles.container}>
      <Image
        source={require('~assets/images/Splash.png')}
        style={styles.splashImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;
