import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {useTheme} from '~theme/ThemeContext';
import {reset} from '~utils/NavigationUtils';
import {ScreensName} from '~theme/Strings';
import {useStore} from '~zustand';
import {useUserDetailsService} from '~hooks/auth';

const SplashScreen = () => {
  const {isAuth} = useStore(state => state);

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset(
        isAuth ? ScreensName.AppStackScreen : ScreensName.AuthStackScreen,
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
