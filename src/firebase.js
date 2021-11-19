import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDu8iPPlhi7aHyDyjf2CS_34zJ4ImSRVwI",
    authDomain: "lotus-cars-27ac4.firebaseapp.com",
    projectId: "lotus-cars-27ac4",
    storageBucket: "lotus-cars-27ac4.appspot.com",
    messagingSenderId: "1034463774098",
    appId: "1:1034463774098:web:5b95b1c59edf068d93ad4b"
  };

  const app = initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app)