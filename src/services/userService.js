import { doc, getDoc, setDoc } from "firebase/firestore";

import { firebaseService } from "./firebaseService";
import { ACC_ROLE } from "./constants";

class UserService {
  constructor() {
    this.firebaseDb = firebaseService.db;
  }

  async createUser(uid, user) {
    const { displayName, email, photoURL, emailVerified } = user;

    const userRef = doc(this.firebaseDb, "users", uid);
    await setDoc(userRef, {
      displayName,
      email,
      photoURL,
      emailVerified,
      role: ACC_ROLE.USER,
    });
  }

  async getUser(uid) {
    const userRef = doc(this.firebaseDb, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) return userSnap.data();
    return undefined;
  }

  async getOrCreateUser(uid, newUser) {
    const { displayName, email, photoURL, emailVerified } = newUser;
    const userWillCreate = { displayName, email, photoURL, emailVerified };

    const user = await this.getUser(uid);
    if (user === undefined) await this.createUser(uid, userWillCreate);
    else return user;

    return await this.getUser(uid);
  }

  async getListExceptMe() {
    // just ADMIN
    const currentUser = firebaseService.auth.currentUser;
    const user = await this.getUser(currentUser.uid);
    let listUsers = [];
    if (user !== undefined && user["role"] === ACC_ROLE.ADMIN) {
      const usersRef = doc(this.firebaseDb, "users");
      const usersSnapt = await getDoc(usersRef);
      const users = usersSnapt.data();
      return users;
    }
    return listUsers;
  }
}

export const userService = new UserService();
