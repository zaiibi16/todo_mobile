import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreensName } from '~theme/Strings';
import SplashScreen from '~screens/splashScreen';
import { AuthStackScreen } from '~navigation/authNavigation';
import { AppStackScreen } from '~navigation/appNavigation';

const RootStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
  gestureEnabled: false,
});

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator initialRouteName={ScreensName.SplashScreen}>
      <RootStack.Screen
        name={ScreensName.SplashScreen}
        component={SplashScreen}
        options={navOptionHandler}
      />
      <RootStack.Screen
        name={ScreensName.AuthStackScreen}
        component={AuthStackScreen}
        options={navOptionHandler}
      />
      <RootStack.Screen
        name={ScreensName.AppStackScreen}
        component={AppStackScreen}
        options={navOptionHandler}
      />
    </RootStack.Navigator>
  );
};
