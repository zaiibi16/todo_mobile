/**
 * @format
 */

if (__DEV__) {
    require("./ReactotronConfig");
  }

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

AppRegistry.registerComponent(appName, () => App);
