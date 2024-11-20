/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent('CycleImportsPOC', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('CycleImportsPOC', {
        rootTag: document.getElementById('root'),
    });
}
