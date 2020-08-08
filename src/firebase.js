import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2i3giJMuTD705y1ygcM4NYRrAJoRJ3G4",
  authDomain: "instagram-react-app-67d58.firebaseapp.com",
  databaseURL: "https://instagram-react-app-67d58.firebaseio.com",
  projectId: "instagram-react-app-67d58",
  storageBucket: "instagram-react-app-67d58.appspot.com",
  messagingSenderId: "120536090336",
  appId: "1:120536090336:web:278ef4a393c9a48f2a7285",
  measurementId: "G-2EBSV8NDYJ",
};

const firbaseApp = firbase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
