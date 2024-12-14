import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useTheme } from '~theme/ThemeContext';

export const getStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    inputField: {
      height: hp(5.8),
      borderRadius: hp(0.8),
      borderColor: colors.lightGrey,
      paddingHorizontal: hp(1.5),
      borderWidth: 2,
      color: colors.darkGrey,
      shadowOpacity: 0.3,
      shadowColor: colors.lightGrey,
      shadowOffset: { width: 1, height: 2 },
      elevation: 1,
      backgroundColor: colors.white,
    },
    inputFieldError: {
      height: hp(5.7),
      borderRadius: hp(0.8),
      borderColor: colors.red,
      paddingHorizontal: hp(1),
      paddingRight: hp(3),
      borderWidth: 2,
      color: colors.darkGrey,
      shadowOpacity: 0.3,
      shadowColor: colors.lightGrey,
      shadowOffset: { width: 1, height: 2 },
      elevation: 1,
      backgroundColor: colors.white,
    },
    labelContainer: {
      marginBottom: hp(1),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    labelText: {
      color: colors.grey,
    },
    subLabelText: {
      alignSelf: 'flex-end',
      textDecorationLine: 'underline',
      color: colors.darkGrey,
    },
    errorText: {
      marginTop: hp(1),
      color: colors.red,
    },
    errorContainer: {
      position: 'absolute',
      right: 10,
      top: hp(1.9),
    },
  });
};
