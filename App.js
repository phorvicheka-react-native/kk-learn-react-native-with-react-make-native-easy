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
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
    const {currentLanguage} = this.props;
    return (
      <Router screenProps={{language: currentLanguage}}/>
    );
  }
}

App.propTypes = {
  currentLanguage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentLanguage: state.userPreferences.language
});

export default connect(mapStateToProps)(App);
