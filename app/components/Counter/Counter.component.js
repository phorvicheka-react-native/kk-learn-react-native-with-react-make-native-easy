import React, {Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import PropTypes from 'prop-types';

class Counter extends Component {

  static propTypes = {
    initialCountValue: PropTypes.number,
    incrementCounter: PropTypes.func,
    decrementCounter: PropTypes.func,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
  };

  state = {count: this.props.initialCountValue};

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));

    const {onIncrement} = this.props;
    if (onIncrement) {
      onIncrement(this.state.count);
    }
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));

    const {onDecrement} = this.props;
    if (onDecrement) {
      onDecrement(this.state.count);
    }
  };

  render () {
    return (
      <View>
        <Button title='+' onPress={this.incrementCounter} />
        <Text>Count: {this.state.count}</Text>
        <Button title='-' onPress={this.decrementCounter} />
      </View>
    );
  }
}

export default Counter;