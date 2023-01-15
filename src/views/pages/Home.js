import React from "react";
import Layer1 from "./layout/Layer1";
import Layer2 from "./layout/Layer2";
import Layer4 from "./layout/Layer4";
import Layer5 from "./layout/Layer5";
import Layer6 from "./layout/Layer6";

import "./style.css";

export default function Home() {
  return (
    <div>
      <Layer1
        cpn1="acsess/img/fpt.png"
        cpn2="acsess/img/onemoutn.png"
        cpn3="acsess/img/prudential.png"
        cpn4="acsess/img/teachcombank.png"
        cpn5="acsess/img/tiki.png"
        cpn6="acsess/img/viettel.png"
        cpn7="acsess/img/image_topcv.png"
      ></Layer1>
      <Layer2
        upload1="acsess/img/mau_cv.png"
        upload2="acsess/img/upload-cv.png"
      ></Layer2>
      <Layer4></Layer4>
      <Layer5
        app1="acsess/img/chplay.png"
        app2="acsess/img/app_store.png"
        ip="acsess/img/app-download.png"
      ></Layer5>
      <Layer6></Layer6>
    </div>
  );
}
