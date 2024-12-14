import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ScreensName, Strings} from '~theme/Strings';
import {useTheme} from '~theme/ThemeContext';
import Button from '~components/core/button';
import {navigate} from '~utils/NavigationUtils';
import Logout from '~assets/svg/Logout.svg';
import {useLogoutService} from '~hooks/auth';
import TaskList from '~components/tasks/taskList';

const HomeScreen = () => {
  const {fonts} = useTheme();
  const {logoutUser} = useLogoutService();

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={[fonts.dSmall, styles.title]}>{Strings.TODO}</Text>
        <Pressable onPress={logoutHandler}>
          <Logout />
        </Pressable>
      </View>
      <TaskList />
      <View style={[styles.buttonContainer]}>
        <Button
          title={Strings.ADDTASK}
          onPress={() => {
            navigate(ScreensName.AddTaskScreen);
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
