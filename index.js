/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import {StackNavigator} from 'react-navigation';
import StartScreen from  './screens/StartScreen';
import CameraScreen from './screens/CameraScreen';

const App = StackNavigator({
    StartScreen : {
        screen : StartScreen,
        navigationOptions : {
            headerTitle : 'Quét mã QR'
        }
    },
    CameraScreen : {
        screen : CameraScreen,
        navigationOptions : {
            headerTitle : 'Trang chủ'
        }
    },
});
AppRegistry.registerComponent(appName, () => App);