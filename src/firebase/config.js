import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBIhy2kjvHwQUIsAu1tjkD0Bxq4nJ_9BsA",
    authDomain: "vue-tutos.firebaseapp.com",
    projectId: "vue-tutos",
    storageBucket: "vue-tutos.appspot.com",
    messagingSenderId: "447478160072",
    appId: "1:447478160072:web:98c5aed949f4e9bdb4e3fd"
};

// init firebase
firebase.initializeApp(firebase);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }