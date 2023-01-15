import React, { lazy } from "react";
import { ACC_ROLE } from "../services/constants";
import { NAVIGATION } from "../services/constants";

// Setup layout
import VerticalLayout from "../layout/VerticalLayout";

const GetLayout = (Element) => (
  <VerticalLayout>
    <Element />
  </VerticalLayout>
);

// Lazy loading components
const Home = lazy(() => import("../views/pages/Home"));
const SignIn = lazy(() => import("../views/pages/SignIn"));
const SignUp = lazy(() => import("../views/pages/SignUp"));
const Error = lazy(() => import("../views/pages/Error"));
const Dashboard = lazy(() => import("../views/dashboard"));
const ManageAccount = lazy(() => import("../views/manageAccount"));

// Form Router
const publicRoutes = [
  {
    path: NAVIGATION.HOME,
    exact: true,
    name: "",
    element: <Home />,
  },
  {
    path: NAVIGATION.SIGN_IN,
    exact: true,
    name: "",
    element: <SignIn />,
  },
  {
    path: NAVIGATION.SIGN_UP,
    exact: true,
    name: "",
    element: <SignUp />,
  },
  {
    path: NAVIGATION.ERROR,
    exact: true,
    name: "",
    element: <Error />,
  },
];

const adminRoutes = [
  {
    path: NAVIGATION.DASHBOARD,
    exact: true,
    name: "",
    element: GetLayout(Dashboard),
  },
  {
    path: NAVIGATION.MANAGE_ACCOUNT,
    exact: true,
    name: "",
    element: GetLayout(ManageAccount),
  },
];

const userRoutes = [];

export const getRoutesByRole = (role) => {
  const routes = Array.prototype.concat([], publicRoutes);
  switch (role) {
    case ACC_ROLE.ADMIN:
      return routes.concat(adminRoutes);
    case ACC_ROLE.USER:
      return routes.concat(userRoutes);
    default:
      return routes;
  }
};
