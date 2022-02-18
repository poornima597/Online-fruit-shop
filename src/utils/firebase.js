// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvPwoPs6rqQRMrBBUTveCP1El4Un4DS3o",
  authDomain: "fruitshop-9f9ee.firebaseapp.com",
  projectId: "fruitshop-9f9ee",
  storageBucket: "fruitshop-9f9ee.appspot.com",
  messagingSenderId: "811485866209",
  appId: "1:811485866209:web:e948c651c7ee99f77cefa0",
  measurementId: "G-W234MK9JBQ"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };
