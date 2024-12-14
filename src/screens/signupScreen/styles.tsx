import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '~theme/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: wp(5),
  },
  title: {
    color: Colors.primaryBlue,
    marginTop: hp(5)
  }

});
