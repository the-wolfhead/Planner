import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAs5PpmSY3YX89RLBC9_xnCPPLDqrDtS8U",
    authDomain: "planner-b4a4b.firebaseapp.com",
    projectId: "planner-b4a4b",
    storageBucket: "planner-b4a4b.appspot.com",
    messagingSenderId: "318563810067",
    appId: "1:318563810067:web:1d3331fe935897b09638e6",
    measurementId: "G-W2BE66L00F"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore().settings({timestampsInSnapshots: true 
});

export default firebase;