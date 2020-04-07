
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXJZcEITDyxkKiRF3us9YKoY4Ui8_GTkc",
    authDomain: "code-names-ea895.firebaseapp.com",
    databaseURL: "https://code-names-ea895.firebaseio.com",
    projectId: "code-names-ea895",
    storageBucket: "code-names-ea895.appspot.com",
    messagingSenderId: "595934224315",
    appId: "1:595934224315:web:50d58f74cfc5dd1a212e9e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();