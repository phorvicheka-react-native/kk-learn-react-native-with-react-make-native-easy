/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import * as RNLocalize from 'react-native-localize';
import Router from './app/routes';
import {setI18nConfigByRNLocalize} from './app/utils/language.utils';

class App extends Component {

  constructor (props) {
    super(props);
    setI18nConfigByRNLocalize();
  }

  componentDidMount () {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount () {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfigByRNLocalize();
    this.forceUpdate();
  };

  render () {
    return (
      <Router screenProps={{language: 'kh'}}/>
    );
  }
}

export default App;
