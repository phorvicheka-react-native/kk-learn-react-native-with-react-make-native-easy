import {changeLanguage} from '../actions/index.actions.js';
import {setI18njsConfig} from '../../utils/language.utils';

export const setCurrentLanguage = (lang) => (dispatch) => {
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
