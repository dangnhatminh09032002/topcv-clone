import React, { lazy } from "react";
import { ACC_ROLE } from "../services/constants";
import { NAVIGATION } from "../services/constants";

// Setup layout
import VerticalLayout from "../layout/VerticalLayout";
import DefaultLayout from "../layout/DefaultLayout";

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
const Vip = lazy(() => import("../views/pages/Vip"));
const CVTemplate = lazy(() => import("../views/pages/CVTemplate"));
const Dashboard = lazy(() => import("../views/dashboard"));
const ManageAccount = lazy(() => import("../views/manageAccount"));
const CVGenerator = lazy(() => import("../views/cvGenerator"));

// Form Router
const publicRoutes = [
  {
    path: NAVIGATION.HOME,
    exact: true,
    name: "",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: NAVIGATION.SIGN_IN,
    exact: true,
    name: "",
    element: (
      <DefaultLayout>
        <SignIn />
      </DefaultLayout>
    ),
  },
  {
    path: NAVIGATION.SIGN_UP,
    exact: true,
    name: "",
    element: (
      <DefaultLayout>
        <SignUp />
      </DefaultLayout>
    ),
  },
  {
    path: NAVIGATION.VIP,
    exact: true,
    name: "",
    element: (
      <DefaultLayout>
        <Vip />
      </DefaultLayout>
    ),
  },
  {
    path: NAVIGATION.CV_TEMPLATE,
    exact: true,
    name: "",
    element: <DefaultLayout>{<CVTemplate />}</DefaultLayout>,
  },
  {
    path: NAVIGATION.ERROR,
    exact: true,
    name: "",
    element: <Error />,
  },
  {
    path: NAVIGATION.CV_GENERATOR,
    exact: true,
    name: "",
    element: <DefaultLayout>{<CVGenerator />}</DefaultLayout>,
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
