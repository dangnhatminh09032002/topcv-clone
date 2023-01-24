import React, { createContext, useState } from "react";
import { userService } from "../services";
import { firebaseService } from "../services";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userState, setUserState] = useState({
    listUser: [],
    loading: false,
  });

  function fetchGetListUsers() {
    const currentUser = firebaseService.auth.currentUser;
    userService.getListExceptMe(currentUser.uid);
  }

  const value = { userState, setUserState, fetchGetListUsers };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
