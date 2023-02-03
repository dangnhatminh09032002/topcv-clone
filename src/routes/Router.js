/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useLayoutEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { firebaseService, userService } from "../services";
import { AuthContext } from "../context/authContext";
import { getRoutesByRole } from "./formRoutes";
import { NAVIGATION } from "../services/constants";
import { Loading } from "../index";

// Setup layout

const Router = () => {
  const [routes, setRoutes] = useState(getRoutesByRole());
  const authProvider = useContext(AuthContext);
  const { authState, setAuthState } = authProvider;
  useLayoutEffect(() => {
    firebaseService.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const currentUser = await userService.getUser(user.uid);
        await setRoutes(getRoutesByRole(currentUser.role));
        await setAuthState({ ...authState, currentUser, loadingInit: false });
      } else {
        await setAuthState({ ...authState, loadingInit: false });
        await setRoutes(getRoutesByRole());
      }
    });
  }, []);

  if (authState.loadingInit) return <Loading />;
  return (
    <Routes>
      {routes.map((r, indx) => (
        <Route key={indx} {...r} />
      ))}
      <Route path="*" element={<Navigate to={NAVIGATION.HOME} />}></Route>
    </Routes>
  );
};

export default Router;
