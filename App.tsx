
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoader from '~components/core/appLoader';
import { RootStackScreen } from '~navigation/rootNavigation';
import { navigationRef } from '~utils/NavigationUtils';
import Toaster from 'react-native-toast-message';
import { toastConfig } from '~utils/ToastConfig';



function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>

      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
         <AppLoader />
        <Toaster config={toastConfig} visibilityTime={4000} />
      </NavigationContainer>
  </SafeAreaProvider>
    // <SafeAreaView >
    //   <View>
    //     <Text>Hello</Text>
    //   </View>
    // </SafeAreaView>
  );
}


export default App;
