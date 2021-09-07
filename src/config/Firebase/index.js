// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaj-9J7iispDTNZNZ5UzAsYb52wAJnr94',
  authDomain: 'my-doctor-d61cb.firebaseapp.com',
  projectId: 'my-doctor-d61cb',
  storageBucket: 'my-doctor-d61cb.appspot.com',
  messagingSenderId: '1062685017662',
  appId: '1:1062685017662:web:493473d9e115ef12fdf36f',
  databaseURL:
    'https://my-doctor-d61cb-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();

export {auth, db};
