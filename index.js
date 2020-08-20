/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import store from './app/redux/store';
import {Provider} from 'react-redux';


class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => NoteTaker);
