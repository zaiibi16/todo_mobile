import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from '~screens/addTask';
import HomeScreen from '~screens/homeScreen';
import { ScreensName } from '~theme/Strings';
import { useTheme } from '~theme/ThemeContext';

const AppStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});


export const AppStackScreen: FC = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: colors.background }]}
      edges={['top', 'bottom']}>
      <AppStack.Navigator initialRouteName={ScreensName.HomeScreen}>
        <AppStack.Screen
          name={ScreensName.HomeScreen}
          component={HomeScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.AddTaskScreen}
          component={AddTask}
          options={navOptionHandler}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};
