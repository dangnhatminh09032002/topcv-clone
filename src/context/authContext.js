import React, { createContext, useState } from "react";
import { firebaseService, userService } from "../services";
import { TYPE_PROVIDER } from "../services/constants";
import { ERROR_MESSAGE } from "../services/constants";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isFetching: false,
    errorMessage: "",
    currentUser: null,
    loadingInit: true,
  });

  async function signUpWithEmailAndPassword(name, email, password) {
    if (authState.isFetching === true) return;
    setAuthState({ ...authState, isFetching: true });
    return firebaseService
      .signUpWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;
        await userService.createUser(userId, {
          displayName: name,
          email: email,
          photoURL: "",
          emailVerified: false,
        });
      })
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;
        const user = await userService.getUser(userId);
        setAuthState({ ...authState, currentUser: user });
      })
      .catch((error) => {
        setAuthState({ ...authState, errorMessage: error.message });
      })
      .finally(() => {
        setAuthState({ ...authState, isFetching: false });
      });
  }

  async function signInWithEmailAndPassword(email, password) {
    if (authState.isFetching === true) return;
    setAuthState({ ...authState, isFetching: true });
    firebaseService
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const userProvider = userCredential.user;
        const user = await userService.getOrCreateUser(userProvider.uid, {
          displayName: userProvider.displayName,
          email: userProvider.email,
          photoURL: userProvider.photoURL,
          emailVerified: userProvider.emailVerified,
        });
        setAuthState({ ...authState, currentUser: user });
      })
      .catch((error) => {
        setAuthState({
          ...authState,
          errorMessage: ERROR_MESSAGE[error.code] || "",
        });
      })
      .finally(() => {
        setAuthState({ ...authState, isFetching: false });
      });
  }

  async function signInWithGoogle() {
    if (authState.isFetching === true) return;
    setAuthState({ ...authState, isFetching: true });
    firebaseService
      .signInWithPopup(TYPE_PROVIDER.GOOGLE)
      .then(async (userCredential) => {
        const userProvider = userCredential.user;
        const user = await userService.getOrCreateUser(userProvider.uid, {
          displayName: userProvider.displayName,
          email: userProvider.email,
          photoURL: userProvider.photoURL,
          emailVerified: userProvider.emailVerified,
        });
        setAuthState({ ...authState, currentUser: user });
        document.location.reload();
      })
      .catch((error) => {})
      .finally(() => {
        setAuthState({ ...authState, isFetching: false });
      });
  }

  async function signInWithFacebook() {
    if (authState.isFetching === true) return;
    setAuthState({ ...authState, isFetching: true });
    firebaseService
      .signInWithPopup(TYPE_PROVIDER.FACEBOOK)
      .then(async (userCredential) => {
        const userProvider = userCredential.user;
        const user = await userService.getOrCreateUser(userProvider.uid, {
          displayName: userProvider.displayName,
          email: userProvider.email,
          photoURL: userProvider.photoURL,
          emailVerified: userProvider.emailVerified,
        });
        setAuthState({ ...authState, currentUser: user });
        document.location.reload();
      })
      .catch((error) => {
        // setAuthState({ ...authState, errorMessage: error.message });
      })
      .finally(() => {
        setAuthState({ ...authState, isFetching: false });
      });
  }

  async function signOut() {
    if (authState.isFetching === true) return;
    setAuthState({ ...authState, isFetching: true });
    await firebaseService.auth.signOut();
    await setAuthState({
      isFetching: false,
      errorMessage: "",
      currentUser: null,
      loadingInit: false,
    });
  }

  const value = {
    authState,
    setAuthState,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
