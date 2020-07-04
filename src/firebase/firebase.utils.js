import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnfyCsbLUz65otJFgxNygrYG1bJFSKjsQ",
    authDomain: "crown-clothing-db-ba720.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-ba720.firebaseio.com",
    projectId: "crown-clothing-db-ba720",
    storageBucket: "crown-clothing-db-ba720.appspot.com",
    messagingSenderId: "353361847537",
    appId: "1:353361847537:web:fb0d1a2afd913219cbb550",
    measurementId: "G-QXQLCC3Z8R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
