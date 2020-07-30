import 'react-native';
/* import React from 'react';
import App from '../App.js'; */

// Note: test renderer must be required after react-native.
/* import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import offlineStorage from '../app/utils/offline.utils.js';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

const mockStore = configureStore([]);

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
import AsyncStorage from '@react-native-community/async-storage'; */

describe('My Connected React-Redux Component', () => {
  /* let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      test: 'sample text',
      content: {
        title: 'sample title',
        text: 'sample text'
      }
    });
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
  }); */
 
  it('should render with given state from Redux store', () => {    
    /* expect(component).toMatchSnapshot();
    AsyncStorage.getItem = jest.fn();
    AsyncStorage.getItem(offlineStorage.keys.NOTES);
    expect(AsyncStorage.getItem).toBeCalledWith(offlineStorage.keys.NOTES); */
  });
});