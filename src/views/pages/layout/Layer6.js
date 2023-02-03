import React, { Component } from "react";

import "../../../assets/styles/global.css";

export default class Layer6 extends Component {
  render() {
    return (
      <div className="layer6">
        <h2>Về chúng tôi</h2>
        <h4>
          TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với
          năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh
          của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự
          ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng cho
          phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây
          dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với
          các cơ hội việc làm phù hợp.
        </h4>
        <div className="money">
          <div className="content">
            <div className="gia-tien">
              <h3>30.000+</h3>
              <h5>Ứng viên đang bật tìm việc trung bình/thời điểm</h5>
            </div>
            <div className="gia-tien">
              <h3>90.000+</h3>
              <h5>Doanh nghiệp sử dụng dịch vụ</h5>
            </div>
            <div className="gia-tien">
              <h3>120.000+</h3>
              <h5>Nhà tuyển dụng sử dụng thường xuyên</h5>
            </div>
            <div className="gia-tien">
              <h3>200.000+</h3>
              <h5>Ứng viên mới mỗi tháng</h5>
            </div>
            <div className="gia-tien">
              <h3>3.000.000+</h3>
              <h5>Lượt ứng viên truy cập hàng tháng</h5>
            </div>
            <div className="gia-tien">
              <h3>4.000.000+</h3>
              <h5>Ứng viên tiềm năng</h5>
            </div>
            <div className="gia-tien">
              <h3>60%</h3>
              <h5>Ứng viên có trên 2 năm kinh nghiệm</h5>
            </div>
            <div className="gia-tien"></div>
          </div>
        </div>
      </div>
    );
  }
}
