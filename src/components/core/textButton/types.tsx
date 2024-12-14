import { TextStyle } from 'react-native';

export interface IButtonProps {
  onPress?: () => void;
  title: string;
  textColor?: TextStyle;
}
