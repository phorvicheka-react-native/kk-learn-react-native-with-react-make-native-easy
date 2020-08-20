import AsyncStorage from '@react-native-community/async-storage';

const keys = {
  'NOTES': 'notes',
  'SELECTED_LANGUAGE': 'selectedLanguage',
};

// Reading object value
const get = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

// Storing object value
const set = async (storageKey, data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

const addNote = async (newNote) => {
  const localNotes = await get(keys.NOTES);
  const newNotes = localNotes ? [...localNotes, newNote] : [newNote];

  return set(keys.NOTES, newNotes);
};

// Storing string value
const setStringValue = async (storageKey, value) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (e) {
    // saving error
  }
};

// Reading string value
const getStringValue = async (storageKey) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const addSelectedLanguage = async (selectedlanguage) => {
  const localLanguage = await getStringValue(keys.SELECTED_LANGUAGE);
  if (selectedlanguage !== localLanguage) {
    return setStringValue(keys.SELECTED_LANGUAGE, selectedlanguage);
  }
};

const clear = AsyncStorage.clear;

module.exports = {
  keys,
  set,
  get,
  addNote,
  setStringValue,
  getStringValue,
  addSelectedLanguage,
  clear
};
