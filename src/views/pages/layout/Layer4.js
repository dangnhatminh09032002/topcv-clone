import React, { Component } from "react";

import "../../../assets/styles/global.css";

export default class Layer4 extends Component {
  render() {
    return (
      <div className="layer4">
        <h1>Phát triển bản thân và sự nghiệp</h1>
        <div className="container-4">
          <div className="noidung-4">
            <i className="bx bx-search-alt" />
            <div className="khampha">
              <h2>Khám phá tính cách và năng lực bản thân</h2>
              <h3>
                Lựa chọn nghề nghiệp chính xác hơn thông qua các bài trắc nghiệm
                về tính cách, khả năng giải quyết vấn đề, trí thông minh,...
              </h3>
              <button className="btn">Trắc nghiệm MBIT</button>
              <button className="btn">Trắc nghiệm MI</button>
            </div>
          </div>
          <div className="noidung-4">
            <i className="bx bx-line-chart" />
            <div className="khampha">
              <h2>Quỹ ý tưởng phát triển nghề nghiệp TopCareer</h2>
              <h3>
                Giúp học sinh, sinh viên hiểu về tầm quan trọng của giáo dục
                hướng nghiệp, nhận diện nghề và nâng cao năng lực ứng tuyển
              </h3>
              <button className="btn">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="noidung-4">
            <i className="bx bx-like" />
            <div className="khampha">
              <h2>Chương trình bệ phóng sự nghiệp 4.0</h2>
              <h3>
                Cung cấp cho sinh viên thông tin về thị trường tuyển dụng và đào
                tạo kỹ năng ứng tuyển, kết nối Nhà trường và Doanh nghiệp
              </h3>
              <button className="btn">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
        <div className="container-4">
          <div className="noidung-4">
            <i className="bx bx-spreadsheet" />
            <div className="khampha">
              <h2>Tra cứu thông tin sự nghiệp</h2>
              <h3>
                Dễ dàng tiếp cận và tìm hiểu về các chế độ, chính sách nhân sự
                cần biết thông qua các công cụ hữu ích
              </h3>
              <button className="btn">Công cụ tính lương Gross-Net</button>
              <button className="btn">Công cụ tính BHTN</button>
            </div>
          </div>
          <div className="noidung-4">
            <i className="bx bxs-timer" />
            <div className="khampha">
              <h2>TopCV Contest - Cổng học tập và đánh giá năng lực</h2>
              <h3>
                Cung cấp các khóa học, các kỳ thi giúp ứng viên hiểu rõ về xu
                hướng việc làm và những tiêu chuẩn mới về Năng lực chuyên môn
              </h3>
              <button className="btn">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
