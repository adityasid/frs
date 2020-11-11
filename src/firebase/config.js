// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLwFIMkIuPvugq1U5ZxFtW-CBTceLHQSU",
    authDomain: "face-recognition-sys.firebaseapp.com",
    databaseURL: "https://face-recognition-sys.firebaseio.com",
    projectId: "face-recognition-sys",
    storageBucket: "face-recognition-sys.appspot.com",
    messagingSenderId: "723802833002",
    appId: "1:723802833002:web:75ae525266e177798aca13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
