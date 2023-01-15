import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import "./index.css";
import Router from "./routes/Router";
import GlobalContext from "./context/GlobalContext";

const Loading = () => {
  return <CircularProgress />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>
);
