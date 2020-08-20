import {changeLanguage, populateNotes} from '../actions/index.actions.js';
import {setI18njsConfig} from '../../utils/language.utils';
import offlineStorage from '../../utils/offline.utils.js';

export const setCurrentLanguage = (lang) => (dispatch) => {
  offlineStorage.addSelectedLanguage(lang);
  setI18njsConfig(lang);
  dispatch(changeLanguage(lang));
};

export const toggleLanguage = () => (dispatch, getState) => {
  const currentLanguage = getState().userPreferences.language;
  if (currentLanguage === 'en') {
    dispatch(setCurrentLanguage('kh'));
  }  else {
    dispatch(setCurrentLanguage('en'));
  }
};

export const getNotesFromOfflineStorage = () => (dispatch) => {
  offlineStorage.get(offlineStorage.keys.NOTES).then((notes) => {
    if (notes && notes.length > 0) {
      dispatch(populateNotes(notes));
    }
  });
};

export const setSelectedLanguageFromOfflineStorage = () => (dispatch) => {
  offlineStorage.getStringValue(offlineStorage.keys.SELECTED_LANGUAGE).then((selectedLanguage) => {
    if (selectedLanguage) {
      dispatch(setCurrentLanguage(selectedLanguage));
    }
  });
};
