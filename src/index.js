import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";

import "./index.css";
import Router from "./routes/Router";
import GlobalContext from "./context/GlobalContext";

export const Loading = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContext>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  </GlobalContext>
);
