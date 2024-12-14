import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { getStyles } from './styles';
import { useTheme } from '~theme/ThemeContext';
import { useStore } from '~zustand';

const AppLoader = () => {
  const { colors } = useTheme();
  const appLoader = useStore(state => state.appLoader);
  const styles = getStyles();
  return (
    appLoader && (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={colors.primaryBlue} />
      </View>
    )
  );
};

export default AppLoader;
