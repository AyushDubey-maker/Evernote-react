import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyACrH-XERt4ehuJ_aLfe4BgJ5UXiTIjr1Y",
    authDomain: "evernote-clone-ea353.firebaseapp.com",
    projectId: "evernote-clone-ea353",
    storageBucket: "evernote-clone-ea353.appspot.com",
    messagingSenderId: "1019692479974",
    appId: "1:1019692479974:web:0b95956616ab4ec038d227"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth()

export  {db,auth};