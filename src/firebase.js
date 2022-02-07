import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmpD5cGRJ5ZkLEpnCofxTFvKDq_uro-5I",
    authDomain: "clone-9b282.firebaseapp.com",
    projectId: "clone-9b282",
    storageBucket: "clone-9b282.appspot.com",
    messagingSenderId: "600847801739",
    appId: "1:600847801739:web:24b283974e928a9bbf638e"
  }; 

  const firebaseApp = firebase.initalizeApps(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage }