import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Strings} from '~theme/Strings';
import {useTheme} from '~theme/ThemeContext';
import LoginForm from '~components/login/loginForm';

const LoginScreen = () => {
  const {fonts} = useTheme();

  return (
    <View style={styles.mainContainer}>
      <Text style={[fonts.dSmall, styles.title]}>{Strings.LOGIN}</Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
