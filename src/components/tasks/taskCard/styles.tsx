import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '~theme/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: wp(3),
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    padding: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateColor: {
    color: Colors.grey,
    marginTop: hp(2),
  },
  textContainer: {
    width: '80%',
  },
  buttonContainer: {
    height: wp(12),
    width: wp(12),
    backgroundColor: Colors.shadow,
    borderRadius: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
