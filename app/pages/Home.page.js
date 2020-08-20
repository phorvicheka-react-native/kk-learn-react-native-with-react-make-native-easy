import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText, addNote} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';
import offlineStorage from '../utils/offline.utils.js';
import {NavigationActions} from 'react-navigation';
import {toggleLanguage} from '../redux/thunks/index.thunks';

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  onAboutPress = () => {
    this.props.navigation.navigate('about');
  }

  render () {
    const {setTitle, setText, title, text, saveNote, notes, currentLanguage, toggleLanguage} = this.props;
    return (
      <Home toggleLanguage={toggleLanguage} currentLanguage={currentLanguage} onAboutPress={this.onAboutPress} setTitle={setTitle} notes={notes} saveNote={saveNote} setText={setText} title={title} text={text} />
    );
  }
}

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  saveNote: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  notes: PropTypes.array,
  navigation: PropTypes.any,
  currentLanguage: PropTypes.string,
  toggleLanguage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text,
  notes: state.notes,
  currentLanguage: state.userPreferences.language
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
  saveNote: (note) => {
    dispatch(addNote(note));
    dispatch(setTitle(''));
    dispatch(setText(''));
    offlineStorage.addNote(note);
    dispatch(
      NavigationActions.navigate({
        routeName: 'about',
        params: {message: 'Navigate from home after saving note.'},
      })
    );
  },
  toggleLanguage: () => dispatch(toggleLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
