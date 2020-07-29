import React, {Component} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './Home.component.style';
import Notes from '../Notes/Notes.component.js';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    if (title && text) {
      saveNote({title, text});
    }
  }
  render () {
    const {setTitle, title, text, setText, notes, onAboutPress} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput style={styles.titleTextInput}
          onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}> Please type your note below </Text>
        <TextInput style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <KeyboardAvoidingView style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn} onPress={this.addNote}>Save</Text>
            <Text style={styles.characterCount}>{text ? text.length : 0} characters</Text>
          </View>
        </KeyboardAvoidingView>
        <Notes data={notes} />
        <Touchable style={styles.aboutUsWrapper} onPress={onAboutPress}>
          <Text style={styles.aboutUs}>About Us</Text>
        </Touchable>
      </View>
    );
  }
}

Home.propTypes = {
  setTitle: PropTypes.func,
  saveNote: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  notes: PropTypes.array,
  text: PropTypes.string,
  onAboutPress: PropTypes.func
};

export default Home;
