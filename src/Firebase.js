import firebase from 'firebase';
const firebaseapp = firebase.initializeApp({

    apiKey: "AIzaSyCuTYnXXXXXXXXXXXXXXXXXXXXXXxozUhg",
    authDomain: "todo-app-b17f3.firebaseapp.com",
    databaseURL: "https://todo-app-b17f3.firebaseio.com",
    projectId: "todo-app-b17f3",
    storageBucket: "todo-app-b17f3.appspot.com",
    messagingSenderId: "401105710059",
    appId: "1:401105710059:web:9d7608ae9e14XXXXx9a07ae",
    measurementId: "G-N9616KDXXXXX"


});


const database = firebaseapp.firestore();
export {database};