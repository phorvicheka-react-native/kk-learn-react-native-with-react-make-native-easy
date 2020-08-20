/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import store, {persistor} from './app/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';


class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => NoteTaker);
