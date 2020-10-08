import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIW2Ig-x6J5chJtrpZdz6Nyfkzab3lFt0",
    authDomain: "ilisten-app.firebaseapp.com",
    databaseURL: "https://ilisten-app.firebaseio.com",
    projectId: "ilisten-app",
    storageBucket: "ilisten-app.appspot.com",
    messagingSenderId: "713514232900",
    appId: "1:713514232900:web:aa9e2a21546fd02b096011",
    measurementId: "G-KNHCQ8DN4Z"
  };
  
  
const app = firebase.initializeApp(firebaseConfig);
export default app;