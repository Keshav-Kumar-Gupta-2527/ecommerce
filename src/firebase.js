import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXHo-L_GLQ-d8O3KPeQ9jdG7eDrBMYrCo",
    authDomain: "clone-10ac2.firebaseapp.com",
    projectId: "clone-10ac2",
    storageBucket: "clone-10ac2.appspot.com",
    messagingSenderId: "1080509247350",
    appId: "1:1080509247350:web:7c1f5ab5149588f07dd457",
    measurementId: "G-2B1Q7XHWBQ"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const  auth=firebase.auth();
   
  export { db , auth};