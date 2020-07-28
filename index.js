/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import store from './app/redux/store';
import {Provider} from 'react-redux';
import offlineStorage from './app/utils/offline.utils.js';
import {populateNotes} from './app/redux/actions/index.actions.js';

// TODO: Move it to appSetup thunk
offlineStorage.get(offlineStorage.keys.NOTES).then((notes) => {
  if (notes && notes.length > 0) {
    store.dispatch(populateNotes(notes));
  }
});

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
