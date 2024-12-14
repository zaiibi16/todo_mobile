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
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    marginTop: hp(5),
    height: hp(20),
    borderRadius: hp(0.8),
    borderColor: Colors.lightGrey,
    paddingHorizontal: hp(1.5),
    borderWidth: 2,
    color: Colors.darkGrey,
    shadowOpacity: 0.3,
    shadowColor: Colors.lightGrey,
    shadowOffset: { width: 1, height: 2 },
    elevation: 1,
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
   }
});
