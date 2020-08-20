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
import {getNotesFromOfflineStorage} from './app/redux/thunks/index.thunks';

class App extends Component {

  constructor (props) {
    super(props);
    setI18nConfigByRNLocalize();
    this.props.getNotesFromOfflineStorage();
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
  getNotesFromOfflineStorage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentLanguage: state.userPreferences.language
});

const mapDispatchToProps = (dispatch) => ({
  getNotesFromOfflineStorage: () => dispatch(getNotesFromOfflineStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
