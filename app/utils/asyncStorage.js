import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log('Error setting the value: ', err);
  }
};
export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log('Error getting the value: ', err);
  }
};
export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key, value);
  } catch (err) {
    console.log('Error removing the value: ', err);
  }
};
