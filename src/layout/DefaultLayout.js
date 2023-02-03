import React from "react";
import HomeHeader from "../views/components/HomeHeader";
import HomeFooter from "../views/components/HomeFooter";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
}
