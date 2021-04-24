import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJ-GG85dlznpXOi-vezUSzYYfoCiASKbo',
  authDomain: 'auto-vermietung-4d5b0.firebaseapp.com',
  projectId: 'auto-vermietung-4d5b0',
  storageBucket: 'auto-vermietung-4d5b0.appspot.com',
  messagingSenderId: '685642432343',
  appId: '1:685642432343:web:bd5ae81c1645788702c812',
  measurementId: 'G-TC94REN5QX'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };