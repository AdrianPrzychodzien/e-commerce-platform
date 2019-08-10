import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8T3NoNHeiw2Klxw52uY_OrbMDnDK4WMs",
  authDomain: "e-commerce-85ebf.firebaseapp.com",
  databaseURL: "https://e-commerce-85ebf.firebaseio.com",
  projectId: "e-commerce-85ebf",
  storageBucket: "",
  messagingSenderId: "506852670763",
  appId: "1:506852670763:web:f59b12b924707c04"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
