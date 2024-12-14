import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useTheme } from '~theme/ThemeContext';

export const getStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    loaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0, .6)',
    },
  });
};
