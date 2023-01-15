import React, { Component } from "react";

import "../style.css";

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
              <img src={this.props.cpn1} alt="" />
            </div>
            <div className="item item1">
              <img src={this.props.cpn2} alt="" />
            </div>
            <div className="item item1">
              <img src={this.props.cpn3} alt="" />
            </div>
            <div className="item item1">
              <img src={this.props.cpn4} alt="" />
            </div>
            <div className="item item1">
              <img src={this.props.cpn5} alt="" />
            </div>
            <div className="item item1">
              <img src={this.props.cpn6} alt="" />
            </div>
          </div>
        </div>
        <div className="right-layer">
          <img src={this.props.cpn7} alt="" />
        </div>
      </div>
    );
  }
}
