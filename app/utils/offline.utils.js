import AsyncStorage from '@react-native-community/async-storage';

const keys = {
  'NOTES': 'notes'
};

const get = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

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

const clear = AsyncStorage.clear;

module.exports = {
  keys,
  set,
  get,
  addNote,
  clear
};
