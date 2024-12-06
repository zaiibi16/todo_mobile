import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

//import Colors from './Colors';
import { IThemeFonts } from './types';
import Colors from './Colors';

export const getDimensions = {
  height: hp('100%'),
};

export const FontSize = {
  dLarge: hp('4.2'), //32
  dMedium: hp('2.8'), //24
  dSmall: hp('2.6'), //22
  dxSmall: hp('2.4'), //20
  pLarge: hp('1.9'), //16
  pMedium: hp('1.65'), //14
  pSmall: hp('1.35'), //12
  pxSmall: hp('1.00'), //10
  bLarge: hp('1.9'), //16
  bMedium: hp('1.65'), //14
  bSmall: hp('1.35'), //12
};

const fontConfig: IThemeFonts = {
  dLarge: {
    fontFamily: 'BeVietnamPro-Bold',
    fontSize: FontSize.dLarge,
    color: Colors.primaryBlack,
    lineHeight: 40,
    letterSpacing: 0,
  },
  dMedium: {
    fontFamily: 'BeVietnamPro-SemiBold',
    fontSize: FontSize.dMedium,
    color: Colors.primaryBlack,
    lineHeight: 32,
    letterSpacing: 0,
  },
  dSmall: {
    fontFamily: 'BeVietnamPro-Medium',
    fontSize: FontSize.dSmall,
    color: Colors.primaryBlack,
    lineHeight: 30,
    letterSpacing: 0,
  },
  dxSmall: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: FontSize.dxSmall,
    color: Colors.primaryBlack,
    lineHeight: 28,
    letterSpacing: 0,
  },
  pLarge: {
    fontFamily: 'BeVietnamPro-Light',
    fontSize: FontSize.pLarge,
    color: Colors.primaryBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  pMedium: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: FontSize.pMedium,
    color: Colors.primaryBlack,
    lineHeight: 20,
    letterSpacing: 0,
  },
  pSmall: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: FontSize.pSmall,
    color: Colors.primaryBlack,
    lineHeight: 16,
    letterSpacing: 0,
  },
  pxSmall: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: FontSize.pxSmall,
    color: Colors.primaryBlack,
    letterSpacing: 0,
  },
  bLarge: {
    fontFamily: 'BeVietnamPro-Medium',
    fontSize: FontSize.bLarge,
    color: Colors.primaryBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bMedium: {
    fontFamily: 'BeVietnamPro-Medium',
    fontSize: FontSize.bMedium,
    color: Colors.primaryBlack,
    lineHeight: 20,
    letterSpacing: 0,
  },
  bSmall: {
    fontFamily: 'BeVietnamPro-Medium',
    fontSize: FontSize.bSmall,
    color: Colors.primaryBlack,
    lineHeight: 16,
    letterSpacing: 0,
  },
};

export default fontConfig;
