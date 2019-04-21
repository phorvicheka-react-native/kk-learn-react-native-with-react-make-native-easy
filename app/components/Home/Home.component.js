import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';
import Counter from '../Counter/Counter.component';

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Please enter your note here</Text>
        <TextArea />
        <Counter initialCountValue={5} />
      </View>
    );
  }
}

export default Home;
