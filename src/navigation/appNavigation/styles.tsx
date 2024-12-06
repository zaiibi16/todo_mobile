import { Platform, StyleSheet } from 'react-native';
import Colors from '~theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.background,
    height: Platform.OS === 'android' ? hp(9) : hp(7),
  },
  headerBackIcon: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
  },
  headerRightIcon: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIconContainer: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(5),
    backgroundColor: Colors.statusBlocker,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: Colors.white,
  },
  notificationCountContainer: {
    width: wp(4.5),
    height: wp(4.5),
    borderRadius: wp(2.25),
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: wp(4.8),
    bottom: wp(3.5),
  },
  notificationText: {
    color: Colors.white,
  },
});
