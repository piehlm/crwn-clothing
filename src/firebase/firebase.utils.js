// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASo7pwIfvo9ZVNaW9IslM3I9uIs_eQwaA",
  authDomain: "crwn-db-e1437.firebaseapp.com",
  projectId: "crwn-db-e1437",
  storageBucket: "crwn-db-e1437.appspot.com",
  messagingSenderId: "335010802096",
  appId: "1:335010802096:web:c2b1e191e1ec7f2f7a8e75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;