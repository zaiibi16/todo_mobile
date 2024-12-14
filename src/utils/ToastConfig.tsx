import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '~theme/Colors';
import { useTheme } from '~theme/ThemeContext';

import SuccessToastIcon from '~assets/svg/SuccessToastIcon.svg';
import ErrorToastIcon from '~assets/svg/ErrorToastIcon.svg';

interface IProps {
  title?: string;
  message?: string;
}

interface IErrorListProps {
  errors: Array<string>;
}

interface IToastProps {
  text1?: string;
  props?: IProps;
}

interface IToastErrorProps {
  text1?: string;
  props: IErrorListProps;
}

export const toastConfig = {
  successor: ({ text1, props }: IToastProps) => {
    const { fonts } = useTheme();
    return (
      <View style={[styles.successcontainer]}>
        <SuccessToastIcon />
        <View style={[styles.textContainer]}>
          <Text style={[fonts.bMedium]}>{text1}</Text>
          <Text style={[fonts.pSmall, styles.message]}>{props?.message}</Text>
        </View>
      </View>
    );
  },
  errorList: ({ text1, props }: IToastErrorProps) => {
    const { fonts } = useTheme();
    const error = props?.errors?.length ? props?.errors[0] : '';

    return (
      <View pointerEvents="none" style={[styles.errorContainer]}>
        <ErrorToastIcon />
        <View style={[styles.textContainer]}>
          <Text style={[fonts.bMedium]}>{text1}</Text>
          {error && <Text style={[fonts.pSmall, styles.message]}>{error}</Text>}
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  successcontainer: {
    width: '92%',
    flexDirection: 'row',
    backgroundColor: Colors.lightSuccessBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightSuccessBorder,
    padding: widthPercentageToDP(5),
    alignItems: 'flex-start',
  },
  errorContainer: {
    width: '92%',
    flexDirection: 'row',
    backgroundColor: Colors.lightErrorbackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightErrorBorder,
    padding: widthPercentageToDP(5),
    alignItems: 'flex-start',
  },
  textContainer: {
    marginLeft: widthPercentageToDP(5),
  },
  title: {},
  message: {
    color: Colors.grey,
    marginTop: widthPercentageToDP(1),
    marginRight: widthPercentageToDP(2),
  },
});
