import 'react-native';
import React from 'react';
import App from '../App.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
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
  });
 
  it('should render with given state from Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});