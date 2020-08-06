import React, {Component} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './Home.component.style';
import Notes from '../Notes/Notes.component.js';
import Touchable from 'react-native-platform-touchable';
import PropTypes from 'prop-types';
import t from '../../utils/language.utils';

// Using Custom Icon
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

// Using MaterialIcons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const EditIcon = <MaterialIcons name='edit' size={18} />;

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
        <Text style={styles.titleHeading}>{t('HOME_noteTitle')} {t('HOME_greeting', {name: 'John Doe'})}</Text>
        <TextInput style={styles.titleTextInput}
          onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}>{EditIcon}{t('HOME_pleaseTypeYourNote')}<Icon name='pencil' size={15}/></Text>
        <TextInput style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <KeyboardAvoidingView style={styles.bottomBar}>
          <View style={styles.bottomBarWrapper}>
            <Text style={styles.saveBtn} onPress={this.addNote}>{t('HOME_save')}</Text>
            <Text style={styles.characterCount}>{text ? text.length : 0} {t('HOME_characters')}</Text>
          </View>
        </KeyboardAvoidingView>
        <Notes data={notes} />
        <Touchable style={styles.aboutUsWrapper} onPress={onAboutPress}>
          <Text style={styles.aboutUs}>{t('HOME_aboutUs')}</Text>
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
