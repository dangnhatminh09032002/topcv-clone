import React, { Component } from "react";

import "../style.css";

export default class Layer2 extends Component {
  render() {
    return (
      <div className="layer2">
        <div className="tao-cv">
          <div className="noidung">
            <h2>Tạo CV online ấn tượng</h2>
            <h3>
              TopCV hiện có 50+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi
              ngành nghề
            </h3>
            <button className="btn">
              <i className="bx bx-plus" />
              Tạo CV ngay
            </button>
          </div>
          <div className="img-1">
            <img src={this.props.upload1} alt="" />
          </div>
        </div>
        <div className="tao-cv upload">
          <div className="noidung">
            <h2>
              Sử dụng CV sẵn có để tìm việc
              <label className="new">Mới</label>
            </h2>
            <h3>
              Cách đơn giản để bắt đầu tìm việc làm tại TopCV, Nhà tuyển dụng sẽ
              nhìn thấy CV bạn đã tải lên
            </h3>
            <button className="btn">
              <i className="bx bx-upload" />
              Upload CV ngay
            </button>
          </div>
          <div className="img-1">
            <img src={this.props.upload2} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
