import { View, Text, Pressable } from 'react-native';
import React from 'react';

import { getStyles } from './styles';
import { useTheme } from '~theme/ThemeContext';
import { IButtonProps } from './types';

const TextButton = ({ title, onPress, textColor }: IButtonProps) => {
  const { fonts } = useTheme();
  const styles = getStyles();
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.7 : 1 },
        styles.mainContainer,
      ]}
      onPress={onPress}>
      <Text style={[fonts.pMedium, styles.title, textColor]}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;
