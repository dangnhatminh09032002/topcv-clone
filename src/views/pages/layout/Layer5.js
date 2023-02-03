import React, { Component } from "react";

import "../../../assets/styles/global.css";
import app1 from "./../../../assets/images/chplay.png";
import app2 from "./../../../assets/images/app_store.png";
import ip from "./../../../assets/images/app-download.png";

export default class Layer5 extends Component {
  render() {
    return (
      <div className="layer5">
        <h2>Cơ hội vàng nằm gọn trong tay bạn</h2>
        <div className="container-app">
          <div className="app">
            <div className="node">
              <h3>
                <i className="bx bx-check-double" />
                Tạo CV, Profile ngay trên điện thoại
              </h3>
              <h3>
                <i className="bx bx-check-double" />
                Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi
                nơi
              </h3>
              <h3>
                <i className="bx bx-check-double" />
                Liên lạc với nhà tuyển dụng qua TopCV Connect
              </h3>
            </div>
            <h4>Tải ứng dụng tìm việc ngay</h4>
            <div className="app-dowload">
              <img src={app1} alt="" />
              <img src={app2} alt="" />
            </div>
          </div>
          <div className="ip">
            <img src={ip} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
