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
  contentContainer: {
    alignItems: 'center',
    marginTop: hp(7),
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: hp(5),
  },
  subText: {
    textAlign: 'center',
    marginTop: hp(2),
    color: Colors.darkGrey,
  },
  buttonContainer: {
    marginTop: hp(10),
  },
  clearDataButton: {
    marginTop: hp(25),
  },
});
