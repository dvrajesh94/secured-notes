import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']); // temporary

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
