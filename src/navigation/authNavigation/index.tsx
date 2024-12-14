import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from '~screens/loginScreen';
import SignupScreen from '~screens/signupScreen';
import {ScreensName} from '~theme/Strings';
import {useTheme} from '~theme/ThemeContext';

const AuthStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export const AuthStackScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[{flex: 1, backgroundColor: colors.background}]}
      edges={['top', 'bottom']}>
      <AuthStack.Navigator initialRouteName={ScreensName.LoginScreen}>
        <AuthStack.Screen
          name={ScreensName.LoginScreen}
          component={LoginScreen}
          options={navOptionHandler}
        />
        <AuthStack.Screen
          name={ScreensName.SignUpScreen}
          component={SignupScreen}
          options={navOptionHandler}
        />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
