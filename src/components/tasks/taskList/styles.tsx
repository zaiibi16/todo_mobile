import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '~theme/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(3),
    paddingBottom: hp(10),
  },
  listItemContainer: {
    marginVertical: wp(2),
  },
  noTaskTextStyle: {
    textAlign: 'center',
    marginTop: hp(20),
    color: Colors.grey,
  },
});
