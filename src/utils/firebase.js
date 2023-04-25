// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZ2NUJR1fM8VFBeeRcYQUUiO_z7-kOLI",
  authDomain: "autotrader-ff5a6.firebaseapp.com",
  projectId: "autotrader-ff5a6",
  storageBucket: "autotrader-ff5a6.appspot.com",
  messagingSenderId: "218741784236",
  appId: "1:218741784236:web:a7d9f9ba25a3e5d98ba909",
  measurementId: "G-NVB48GWJLB"
};

// Initialize Firebase
// firebase deploy --only hosting:autotrader
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
//const analytics = getAnalytics(app);

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = getFirestore(firebase);

export default firebase;
