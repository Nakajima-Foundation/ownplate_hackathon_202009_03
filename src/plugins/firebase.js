import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBfZjssQOH3Kslzzeqi-_X-DMt76k5cSHg",
        authDomain: "myqr-26af0.firebaseapp.com",
        databaseURL: "https://myqr-26af0.firebaseio.com",
        projectId: "myqr-26af0",
        storageBucket: "myqr-26af0.appspot.com",
        messagingSenderId: "361502386492",
        appId: "1:361502386492:web:5bb8236cd22140f9935639",
        measurementId: "G-TJ364Q1GPY"
    });
  }


  const db = firebase.firestore();

  export { firebase, db };
