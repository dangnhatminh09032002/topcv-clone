import React from "react";
import { Link } from "react-router-dom";

import template_1 from "../../assets/images/teamlate-img1.png";
import template_2 from "../../assets/images/teamlate-img2.png";
import template_3 from "../../assets/images/teamlate-img3.png";
import template_4 from "../../assets/images/teamlate-img4.png";
import template_5 from "../../assets/images/teamlate-img5.png";
import template_6 from "../../assets/images/teamlate-img6.png";
import template_7 from "../../assets/images/teamlate-img7.png";
import template_8 from "../../assets/images/teamlate-img8.png";
import template_9 from "../../assets/images/teamlate-img9.png";

export default function CVTemplate() {
  return (
    <div className="main-cv">
      <div className="main-left">
        <h2>Tìm mẫu CV phù hợp</h2>
        <div className="row">
          <div className="col-75">
            <select id="country" name="Language">
              <option value="vietnam">Tiếng Việt</option>
              <option value="english">Tiếng Anh</option>
              <option value="japan">Tiếng Nhật</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-75">
            <select id="country" name="word">
              <option value>Tất cả ngành nghề</option>
              <option value>Kinh doanh / Bán hàng</option>
              <option value>Biên / Phiên dịch</option>
              <option value>Báo chí / Truyền hình</option>
              <option value>Bưu chính - Viễn thông</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-75">
            <select id="country" name="options">
              <option value>Tất cả thiết kế</option>
              <option value>Đơn giản</option>
              <option value>Thanh lịch</option>
              <option value>Kinh nghiệm</option>
              <option value>Sáng tạo</option>
              <option value>Trang trọng</option>
              <option value>Chuyên nghiệp</option>
            </select>
          </div>
        </div>
        <h2>Sắp xếp</h2>
        <div className="check-box">
          <div className="check1">
            <input
              type="radio"
              id="radio1"
              name="fav_language"
              defaultValue="HTML"
            />
            <label htmlFor="radio1">Mới cập nhập</label>
          </div>
          <br />
          <div className="check2">
            <input
              type="radio"
              id="radio2"
              name="fav_language"
              defaultValue="HTML"
            />
            <label htmlFor="radio2">Được dùng nhiều nhất</label>
          </div>
        </div>
        <div className="image-list">
          <img src="acsess/img/banner_list_cv.png" alt="" />
        </div>
      </div>
      <div className="main-right">
        <div className="head-title">
          <h2>Danh sách mẫu CV xin việc tiếng Anh / Việt / Nhật chuẩn 2022</h2>
          <span>
            Các mẫu CV đuợc thiết kế theo chuẩn, theo các ngành nghề. Phù hợp
            với sinh viên và người đi làm.
          </span>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_1} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 5</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_2} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 4</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_3} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Hello</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_4} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Chrome</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_5} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Tinh tế 2</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_6} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Màu sắc</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_7} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 3</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_8} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 2</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_9} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Tinh tế 1</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_1} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 5</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_2} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 4</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_3} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Hello</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_4} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Chrome</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_5} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Tinh tế 2</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_6} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Màu sắc</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-teamlate">
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_7} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 3</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_8} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Basic 2</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
          <div className="teamlate-cv">
            <div className="wallpaper">
              <div className="note">
                <a className="eye" href="./">
                  <i className="fa-regular fa-eye" />
                  Xem trước
                </a>
                <Link to="/cv-generator" className="pen" href="./">
                  <i className="fa-solid fa-pen" />
                  Dùng mẫu này
                </Link>
              </div>
            </div>
            <img src={template_9} alt="" />
            <div className="teamlate-info">
              <div className="teamlate-create">
                <a href="./">Chuyên nghiệp</a>
                <a href="./">sáng tạo</a>
              </div>
              <div className="teamlate-title">
                <a href="./">Mẫu CV Tinh tế 1</a>
              </div>
              <div className="teamlate-color">
                <div className="color red" />
                <div className="color blue" />
                <div className="color green" />
                <div className="color orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
