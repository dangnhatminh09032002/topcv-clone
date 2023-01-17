import React from "react";
import "../../assets/styles/dangky.css";
import "../../assets/styles/dangnhap.css";
import "../../assets/styles/trangchu.css";

export default function CVGenerator() {
  return (
    <div className="viet-cv">
      <div className="font-menu">
        <div className="container-lq">
          <div className="font-txt">
            <div className="item-font">
              <div className="title-txt">Ngôn ngữ</div>
              <div className="options">
                <span className="options-country">
                  <img src="./img/en.png" alt="" />
                </span>
                <span className="options-country">
                  <img src="./img/vie.png" alt="" />
                </span>
                <span className="options-country">
                  <img src="./img/jp.png" alt="" />
                </span>
              </div>
            </div>
            <div className="item-font  color-form">
              <div className="title-txt">Tông màu</div>
              <div className="options">
                <span className="color orange">
                  <i className="bx bx-check" />
                </span>
                <span className="color green">
                  <i className="bx bx-check" />
                </span>
                <span className="color blue1">
                  <i className="bx bx-check" />
                </span>
                <span className="color blue">
                  <i className="bx bx-check" />
                </span>
              </div>
            </div>
            <div className="item-font">
              <div className="title-txt">Font chữ</div>
              <div className="options-Language">
                <div className="row">
                  <div className="col-75">
                    <select id="country" name="Roboto">
                      <option value="Roboto">Roboto Condensed</option>
                      <option value="Robo">Roboto</option>
                      <option value="open">Open Sans</option>
                      <option value="Mi">Mitr</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-font">
              <div className="title-txt">Cỡ chữ</div>
              <div className="options-font">
                <span className="options-country">
                  <i className="fa-solid fa-font small" />
                </span>
                <span className="options-country">
                  <i className="fa-solid fa-font big" />
                </span>
                <span className="options-country">
                  <i className="fa-solid fa-font" />
                </span>
              </div>
            </div>
            <div className="item-font">
              <div className="title-txt">Cách dòng</div>
              <div className="options-font">
                <span className="options-country 1">
                  <i className="fa fa-arrows-v" />
                </span>
                <span className="options-country">
                  <i className="fa fa-arrows-v" />
                </span>
                <span className="options-country 3">
                  <i className="fa fa-arrows-v" />
                </span>
              </div>
            </div>
            <div className="item-font">
              <div className="title-txt">Thêm mục</div>
              <div className="options-font">
                <span className="options-country">
                  <i className="fa-solid fa-plus plus" />
                </span>
              </div>
            </div>
            <div className="item-font">
              <div className="title-txt">Đổi mẫu CV</div>
              <div className="options-font">
                <span className="options-country">
                  <i className="fa fa-files-o bar" />
                </span>
              </div>
            </div>
            <div className="save item-font ">
              <div className="title-txt">Lưu CV</div>
              <div className="options-font">
                <span className="options-country">
                  <i className="fa fa-floppy-o luu" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="taocv">
        <div className="title">Untilted CV</div>
        <div className="taocv-container">
          <div className="taocv-left">
            <div className="expwork">
              <div className="gioithieu-exp">
                <h1>
                  <i className="fa-solid fa-circle" /> Kinh nghiệm làm việc
                </h1>
              </div>
              <div className="nganh">Developer Engineer - </div>
              <div className="ngaylamviec">3/9/2022</div>
              <div className="congty">Công ty DTU</div>
              <div className="thongtin-work">
                - Hỗ trợ khách hàng thiết kế ra sản phẩm website, app, game các
                mô hình dự án khác,... - Giới thiệu, tư vấn sản phẩm, giải đáp
                các vấn đề thắc mắc của khách hàng qua điện thoại và email.
              </div>
              <div className="nganh">Designer - </div>
              <div className="ngaylamviec">9/9/2022</div>
              <div className="congty">Công ty DTU</div>
              <div className="thongtin-work">
                - Hỗ trợ khách hàng thiết kế ra sản phẩm website, app, game các
                mô hình dự án khác,...
                <br />- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc
                mắc của khách hàng qua điện thoại và email.
              </div>
            </div>
            <div className="expwork">
              <div className="gioithieu-exp">
                <h1>
                  <i className="fa-solid fa-circle" /> Hoạt động
                </h1>
              </div>
              <div className="nganh">Software Engineer - </div>
              <div className="ngaylamviec">3/9/2022</div>
              <div className="congty">Đại học Duy Tân</div>
              <div className="thongtin-work">
                -Tập hợp các món quà và phân phát tới người vô gia cư.
                <br />- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp
                họ có những suy nghĩ lạc quan.
              </div>
            </div>
            <div className="expwork">
              <div className="gioithieu-exp">
                <h1>
                  {" "}
                  <i className="fa-solid fa-circle" /> Chứng chỉ
                </h1>
              </div>
              <div className="ngaylamviec">3/9/2022</div>
              <div className="congty">Đại học Duy Tân</div>
              <div className="thongtin-work">-Giải tài năng Developer</div>
            </div>
            <div className="expwork">
              <div className="gioithieu-exp">
                <h1>
                  <i className="fa-solid fa-circle" /> Các kỹ năng
                </h1>
              </div>
              <div className="nganh">Software Engineer - </div>
              <div className="thongtin-work">
                - C, C++, Java, JavaScript, .Net
                <br />- HTML, CSS, Bootstrap,…
              </div>
              <div className="nganh">Tiếng Anh </div>
              <div className="thongtin-work">-Giao tiếp cơ bản</div>
            </div>
          </div>
          <div className="taocv-right">
            <div className="taocv-right__image">
              <i className="fa-solid fa-camera" />
              <div className="camera-title">Click để đăng ảnh</div>
            </div>
            <div className="ungvien">
              <div className="tenungvien">Lê Quang Bảo</div>
              <div className="vitriungvien">Software Engineer</div>
            </div>
            <div className="information">
              <h2>Thông tin</h2>
              <div className="information-form">
                <i className="fa-solid fa-calendar-days" />
                <p>19/05/1992</p>
              </div>
              <div className="information-form">
                <i className="fa-solid fa-phone" />
                <p>0123456789</p>
              </div>
              <div className="information-form">
                <i className="fa-sharp fa-solid fa-envelope" />
                <p>abcxyz@gmail.com</p>
              </div>
              <div className="information-form">
                <i className="fa-solid fa-info" />
                <p>http://quangbao.com.vn</p>
              </div>
              <div className="information-form">
                <i className="fa-solid fa-location-dot" />
                <p>03 Quang Trung, Đà Nẵng</p>
              </div>
            </div>
            <div className="expwork">
              <div className="gioithieu-exp">
                <h1>
                  <i className="fa-solid fa-circle" /> Mục tiêu nghề nghiệp
                </h1>
              </div>
              <div className="thongtin-work">
                Một sinh viên Kỹ thuật phần mềm cực kỳ tài năng và có một tương
                lai đầy hứa hẹn với việc học những kiến thức bổ ích tại trường
                đại học. Đam mê phát triển web và chăm chỉ học hỏi thêm các công
                nghệ nâng cao chất lượng sản phẩm như HTML, CSS, JS, VueJS,
                ReactJS, NodeJs. Học hỏi mỗi ngày, tích lũy kiến thức để trở
                thành Full-stack developer trong tương lai gần. Vì vậy, tôi có
                động lực để cải thiện kỹ năng phát triển phần mềm và tiến bộ
                trong sự nghiệp của mình.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
