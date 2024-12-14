import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useGetTasksService} from '~hooks/task';
import TaskCard from '../taskCard';
import {styles} from './styles';
import {useStore} from '~zustand';
import {Strings} from '~theme/Strings';
import {useTheme} from '~theme/ThemeContext';

const TaskList = () => {
  const {fonts} = useTheme();
  const {getTasks} = useGetTasksService();
  const isFocused = useIsFocused();
  const {taskList} = useStore(state => state);

  useEffect(() => {
    if (isFocused) {
      getTasks();
    }
  }, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      {taskList && taskList?.length > 0 ? (
        <FlatList
          data={taskList}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.listItemContainer}>
              <TaskCard {...item} />
            </View>
          )}
        />
      ) : (
        <Text style={[fonts.pLarge, styles.noTaskTextStyle]}>
          {Strings.NOTASK}
        </Text>
      )}
    </View>
  );
};

export default TaskList;
