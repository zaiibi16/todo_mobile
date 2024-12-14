import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

import { useTheme } from '~theme/ThemeContext';
import { getStyles } from './styles';
import { IInputFieldProps } from './types';

import ErrorIcon from '~assets/svg/ErrorIcon.svg';
import EyeLash from '~assets/svg/EyeLash.svg';
import Eye from '~assets/svg/Eye.svg';

const InputField = ({
  label,
  sublabel,
  placeholder,
  keyboardType,
  value,
  onChangeText,
  error,
  password,
  onPress,
  customLabelStyle,
}: IInputFieldProps) => {
  const { fonts, colors } = useTheme();
  const styles = getStyles();
  const [showPassword, setShowPassword] = useState(password);
  const inputFieldStyle = error ? styles.inputFieldError : styles.inputField;
  return (
    <View>
      <View style={styles.labelContainer}>
        {label && (
          <Text style={[fonts.bMedium, styles.labelText, customLabelStyle]}>
            {label}
          </Text>
        )}
        {sublabel && (
          <Pressable onPress={onPress}>
            <Text style={[fonts.bSmall, styles.subLabelText]}>{sublabel}</Text>
          </Pressable>
        )}
      </View>
      <View>
        <TextInput
          style={[fonts.bMedium, inputFieldStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.lightGrey}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword}
        />
        <View style={styles.errorContainer}>
          {error ? (
            <ErrorIcon />
          ) : password ? (
            <Pressable
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              {!showPassword ? <Eye /> : <EyeLash />}
            </Pressable>
          ) : null}
        </View>
      </View>
      <View style={styles.labelContainer}>
        <Text style={[fonts.bMedium, styles.errorText]}>{error}</Text>
      </View>
    </View>
  );
};

export default InputField;
