import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles.js';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';

class AboutApp extends Component {
  static navigationOptions = {
    title: 'About App',
  };

  render () {
    const {navigation} = this.props;
    const navigatingFrom = navigation.getParam('message', 'default value');
    return (
      <View style={styles.container}>
        <Text>About the App </Text>
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
