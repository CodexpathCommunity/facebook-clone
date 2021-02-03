// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJQ2nlS4mVG2Q80CZ2fB-QeOSUDXkgeJg",
    authDomain: "facebook-clone-206d7.firebaseapp.com",
    databaseURL: "https://facebook-clone-206d7.firebaseio.com",
    projectId: "facebook-clone-206d7",
    storageBucket: "facebook-clone-206d7.appspot.com",
    messagingSenderId: "685776238001",
    appId: "1:685776238001:web:83b96f364b25abe5a5b990",
    measurementId: "G-J99FET3KQJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export {auth, provider }
  export default db
  