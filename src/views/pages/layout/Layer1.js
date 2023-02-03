import React, { Component } from "react";

import "../../../assets/styles/global.css";

import cpn1 from "./../../../assets/images/fpt.png";
import cpn2 from "./../../../assets/images/onemoutn.png";
import cpn3 from "./../../../assets/images/prudential.png";
import cpn4 from "./../../../assets/images/teachcombank.png";
import cpn5 from "./../../../assets/images/tiki.png";
import cpn6 from "./../../../assets/images/viettel.png";
import cpn7 from "./../../../assets/images/image_topcv.png";

export default class Layer1 extends Component {
  render() {
    return (
      <div className="layer1">
        <div className="left-layer">
          <h1>Tìm kiếm phù hợp với bạn</h1>
          <div className="input-search">
            <input className="search" type="search" />
            <input
              className="btn btn-primary"
              type="button"
              defaultValue="Tìm việc ngay"
            />
          </div>
          <h3>Các công ty tuyển dụng hàng đầu trên TopCv</h3>
          <div className="logo-company">
            <div className="item " id="fpt">
              <img src={cpn1} alt="" />
            </div>
            <div className="item item1">
              <img src={cpn2} alt="" />
            </div>
            <div className="item item1">
              <img src={cpn3} alt="" />
            </div>
            <div className="item item1">
              <img src={cpn4} alt="" />
            </div>
            <div className="item item1">
              <img src={cpn5} alt="" />
            </div>
            <div className="item item1">
              <img src={cpn6} alt="" />
            </div>
          </div>
        </div>
        <div className="right-layer">
          <img src={cpn7} alt="" />
        </div>
      </div>
    );
  }
}
