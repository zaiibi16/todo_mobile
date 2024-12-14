import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IButtonProps {
  onPress: () => void;
  title: string;
  active?: boolean;
  disabled?: boolean;
  smallBtn?: boolean;
  customStyle?: Array<StyleProp<ViewStyle>>;
  customTextStyle?: Array<StyleProp<TextStyle>>;
  children?: any;
  isLoading?: boolean;
  unFilled?: boolean;
}
