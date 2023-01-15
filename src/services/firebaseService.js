import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { TYPE_PROVIDER } from "./constants";

export class FirebaseService {
  _firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  constructor() {
    this.app = initializeApp(this._firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    // Provider
    this.googleAuthProvider = new GoogleAuthProvider();
    this.facebookAuthProvider = new FacebookAuthProvider();
  }

  // Authentication
  signUpWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signInWithPopup(typeProvider) {
    const providers = {
      [TYPE_PROVIDER.GOOGLE]: this.googleAuthProvider,
      [TYPE_PROVIDER.FACEBOOK]: this.facebookAuthProvider,
    };

    const provider = providers[typeProvider];

    if (provider === undefined) throw new Error("Say Hello");
    return signInWithPopup(this.auth, provider);
  }

  getCurrentUser() {}
}

export const firebaseService = new FirebaseService();
