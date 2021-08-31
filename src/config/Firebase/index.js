// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSOHqs40R_9p7tEqOnO1x2C47G_HyZXrk',
  authDomain: 'my-doctor-01-7b9fe.firebaseapp.com',
  projectId: 'my-doctor-01-7b9fe',
  storageBucket: 'my-doctor-01-7b9fe.appspot.com',
  messagingSenderId: '448812606464',
  appId: '1:448812606464:web:bbf2a9a3bf74690ee764e5',
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;
