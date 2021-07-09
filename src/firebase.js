import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCm2o648p32PuWRQoPzsUjJVeIcs328918",
  authDomain: "vuejs-firebase-2e83a.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-2e83a.firebaseio.com",
  projectId: "vuejs-firebase-2e83a",
  storageBucket: "vuejs-firebase-2e83a.appspot.com",
  messagingSenderId: "814107136524",
  appId: "1:814107136524:web:a7a2317597778666861429",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
