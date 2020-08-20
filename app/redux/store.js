import {createStore, compose, applyMiddleware} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';


// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  /* whitelist: [
    'authReducer',
  ], */
  // Blacklist (Don't Save Specific Reducers)
  /* blacklist: [
    'counterReducer',
  ], */
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  (state) => state.nav
);

const middleware = [
  // someReduxMiddleware,
  // someOtherReduxMiddleware
  reactNavigationReduxMiddleware,
  thunk,
  createLogger()
];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(persistedReducer, enhancer);

export default store;

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
