import React from "react";
import Layer1 from "./layout/Layer1";
import Layer2 from "./layout/Layer2";
import Layer4 from "./layout/Layer4";
import Layer5 from "./layout/Layer5";
import Layer6 from "./layout/Layer6";

import "../../assets/styles/global.css";
import "../../assets/styles/trangchu.css";

export default function Home() {
  return (
    <div>
      <Layer1></Layer1>
      <Layer2></Layer2>
      <Layer4></Layer4>
      <Layer5></Layer5>
      <Layer6></Layer6>
    </div>
  );
}
