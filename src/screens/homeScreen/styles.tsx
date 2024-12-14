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
  title: {
    color: Colors.primaryBlue,
  },
  headerContainer: {
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: wp(5),
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
  },
});
