import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutDevs.styles.js';

class AboutDevs extends Component {
  static navigationOptions = {
    title: 'About Devs',
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>About the Creators </Text>
      </View>
    );
  }
}

AboutDevs.defaultProps = {
};
AboutDevs.propTypes = {
};

export default AboutDevs;
