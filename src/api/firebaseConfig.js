import Firebase from '@firebase/app';
import { AsyncStorage } from 'react-native';
import '@firebase/auth';
import '@firebase/firestore';
import config from '../../config.dist';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return new Error(error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    return new Error(error);
  }
};

const firebase = Firebase.initializeApp(config.firebase);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    storeData('isLoggedIn', JSON.stringify(true));
    storeData('userId', user.uid);
  } else {
    removeData('isLoggedIn');
    removeData('userId');
  }
});

export default firebase;
