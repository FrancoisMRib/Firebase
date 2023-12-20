import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8758DyqQAM1YPOYrHeaX4XE8EpNfVJ3k",
    authDomain: "vue-firebase-14-12-23.firebaseapp.com",
    databaseURL: "https://vue-firebase-14-12-23-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-14-12-23",
    storageBucket: "vue-firebase-14-12-23.appspot.com",
    messagingSenderId: "513088172349",
    appId: "1:513088172349:web:bae645a72e2fda3e835554"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();