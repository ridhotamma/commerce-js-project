import firebase from "@firebase/app";
import "@firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAm1ysmh9bXe63aFZqXyfCtvDV9fbwhUis",
  authDomain: "commerse-js.firebaseapp.com",
  projectId: "commerse-js",
  storageBucket: "commerse-js.appspot.com",
  messagingSenderId: "1054391695971",
  appId: "1:1054391695971:web:4725ba8db5f2e465e6d656",
  measurementId: "G-30YZKS1TDV",
});

export default firebaseConfig;
