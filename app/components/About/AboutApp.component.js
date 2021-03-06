import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles.js';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import t from '../../utils/language.utils';

class AboutApp extends Component {

  render () {
    const {navigation} = this.props;
    const navigatingFrom = navigation.getParam('message', 'default value');
    return (
      <View style={styles.container}>
        <Text>{t('ABOUT_theAppDesc')}</Text>
        {navigatingFrom ? <Text>Navigating from: {JSON.stringify(navigatingFrom)} </Text> : null}
      </View>
    );
  }
}

AboutApp.defaultProps = {
};
AboutApp.propTypes = {
  navigation: PropTypes.any,
};

export default withNavigation(AboutApp);
