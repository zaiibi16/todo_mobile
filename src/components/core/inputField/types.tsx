import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface IInputFieldProps extends TextInputProps {
  label?: string;
  sublabel?: string;
  placeholder?: string;
  error?: string | null;
  password?: boolean;
  dob?: boolean;
  onPress?: Function;
  customLabelStyle?: Array<StyleProp<ViewStyle>>;
}
