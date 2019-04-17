import Firebase from './firebaseConfig';

export const isMovieAddedToLibrary = async (movieId, userId, movieType) => {
  const querySnapshot = await Firebase.firestore()
    .collection('library')
    .where('userId', '==', userId)
    .where('movieId', '==', movieId)
    .where('movieType', '==', movieType)
    .get();

  if (!querySnapshot.empty) {
    return true;
  }
  return false;
};

export const addToLibrary = (movieId, userId, movieType) => Firebase.firestore()
  .collection('library')
  .add({
    userId,
    movieId,
    movieType,
  })
  .catch(error => new Error(error));

export const removeFromLibrary = async (movieId, userId, movieType) => {
  const querySnapshot = await Firebase.firestore()
    .collection('library')
    .where('userId', '==', userId)
    .where('movieId', '==', movieId)
    .where('movieType', '==', movieType)
    .get();

  querySnapshot.forEach(doc => doc.ref.delete());
};

export const getBookmarkedMovies = userId => Firebase.firestore()
  .collection('library')
  .where('userId', '==', userId)
  .get();

export const signUp = (email, password) => Firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(error => new Error(error));

export const login = (email, password) => Firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch(error => new Error(error));

export const signOut = () => Firebase.auth()
  .signOut()
  .catch(err => alert('Error happened while trying to sign out, please try again', err));
