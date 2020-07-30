import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import notes from './notes.reducer';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {AppNavigator} from '../../routes';

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  test,
  content,
  notes,
  nav: navReducer,
});
