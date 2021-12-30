/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (global.BigInt === 'undefined') {
  console.log('Big Integer not found globally!!!!');
  global.BigInt = require('big-integer');
}

AppRegistry.registerComponent(appName, () => App);
