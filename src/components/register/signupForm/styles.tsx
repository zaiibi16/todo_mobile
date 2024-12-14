import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '~theme/Colors';
import {useTheme} from '~theme/ThemeContext';

export const getStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    formContainer: {
      flex: 1,
      marginTop: hp(4),
      justifyContent: 'space-between',
      marginBottom: hp(2),
    },
    buttonStyle: {
      marginVertical: hp(1),
    },
    donthaveAccountTextColor: {
      color: colors.darkGrey,
    },
    signupContainer: {
      flexDirection: 'row',
      marginVertical: hp(1),
      alignSelf: 'center',
      alignItems: 'center',
    },
    registerButtonColor: {
      color: Colors.primaryBlue,
    },
    errorBlockContainer: {
      position: 'absolute',
      width: '100%',
      bottom: hp(21),
    },
  });
};
