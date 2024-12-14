import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Strings} from '~theme/Strings';
import {useTheme} from '~theme/ThemeContext';
import SignUpForm from '~components/register/signupForm';

const SignupScreen = () => {
  const {fonts} = useTheme();

  return (
    <View style={styles.mainContainer}>
      <Text style={[fonts.dSmall, styles.title]}>{Strings.REGISTER}</Text>
      <SignUpForm />
    </View>
  );
};

export default SignupScreen;
