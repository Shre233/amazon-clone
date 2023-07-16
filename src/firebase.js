// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFAmuIK5IrAyvKs-w_2l9dL9TFBwJtZqI",
  authDomain: "clone-5f724.firebaseapp.com",
  projectId: "clone-5f724",
  storageBucket: "clone-5f724.appspot.com",
  messagingSenderId: "978950193264",
  appId: "1:978950193264:web:62621d8e86ae951697f4b5",
  measurementId: "G-SN4JKVM5YN",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
