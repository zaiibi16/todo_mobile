import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from '~theme/ThemeContext';

export const getStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    mainContainer: {
      padding: wp(1),
    },
    title: {
      color: colors.grey,
    },
  });
};
