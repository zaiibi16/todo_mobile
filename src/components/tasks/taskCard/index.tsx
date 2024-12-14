import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ITask} from './types';
import {styles} from './styles';
import {useTheme} from '~theme/ThemeContext';
import moment from 'moment';

import NotificationSelectIcon from '~assets/svg/NotificationSelectIcon.svg';
import {useMarkDoneService} from '~hooks/task';

const TaskCard = (taskData: ITask) => {
  const {fonts} = useTheme();
  const {markDone} = useMarkDoneService();

  const taskDoneHandler = () => {
    const data = {
      _id: taskData?._id,
    };
    markDone(data);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={[fonts.pMedium]}>{taskData?.description}</Text>
        <Text style={[fonts.pSmall, styles.dateColor]}>
          {moment(taskData?.createDate).format('YYYY-MM-DD')}
        </Text>
      </View>
      <Pressable style={styles.buttonContainer} onPress={taskDoneHandler}>
        <NotificationSelectIcon />
      </Pressable>
    </View>
  );
};

export default TaskCard;
