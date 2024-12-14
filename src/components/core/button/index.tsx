import {Text, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import {useTheme} from '~theme/ThemeContext';
import {IButtonProps} from './types';
import {styles} from './styles';

const Button = ({
  title,
  disabled,
  onPress,
  customStyle,
  customTextStyle,
  children,
  isLoading,
  smallBtn,
  unFilled,
}: IButtonProps) => {
  const {fonts} = useTheme();

  const widthStyle = smallBtn ? styles.smallBtn : {};
  const fillStyle = unFilled
    ? styles.unfilledButtonContainer
    : styles.filledButtonContainer;
  const disabledStyle = disabled
    ? unFilled
      ? styles.disabledUnFilledButtonContainer
      : styles.disabledFilledButtonContainer
    : {};

  return (
    <Pressable
      style={({pressed}) => [
        styles.buttonContainer,
        widthStyle,
        fillStyle,
        disabledStyle,
        customStyle,
        {opacity: pressed ? 0.7 : 1},
      ]}
      disabled={disabled || isLoading}
      onPress={onPress}>
      <Text
        style={[
          fonts.bLarge,
          styles.title,
          unFilled ? styles.titleUnfilled : null,
          customTextStyle,
          disabled ? styles.disabledText : null,
        ]}>
        {title}
      </Text>
      {isLoading && <ActivityIndicator style={styles.loaderStyle} />}
      {children ? children : null}
    </Pressable>
  );
};

export default Button;
