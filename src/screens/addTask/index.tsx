import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ScreensName, Strings } from '~theme/Strings';
import { useTheme } from '~theme/ThemeContext';
import Button from '~components/core/button';
import { back, navigate } from '~utils/NavigationUtils';
import Colors from '~theme/Colors';
import { styles } from './styles';
import CloseIcon from '~assets/svg/CloseIcon.svg'
import { useAddTaskService } from '~hooks/task';


const AddTask = () => {
  const {fonts} = useTheme();
  const [taskDescription, setTaskdescription] = useState('');
  const {addTask} = useAddTaskService()

  const closeHandler = () => {
    back();
  };

  const addTaskHandler = () => {
    const data = {
        description: taskDescription,
    }
    addTask(data);
  };

  return (
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <Text style={[fonts.dSmall, styles.title]}>{Strings.ADDTASK}</Text>
            <Pressable onPress={closeHandler}>
                <CloseIcon/>
            </Pressable>
        </View>
      <TextInput
        style={[fonts.bMedium, styles.inputField]}
        placeholderTextColor={Colors.lightGrey}
        maxLength={130}
        multiline
        value={taskDescription}
        onChangeText={setTaskdescription}/>
      <View style={[styles.buttonContainer]}>
      <Button title={Strings.DONE} onPress={addTaskHandler} disabled={taskDescription === ''}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTask;
