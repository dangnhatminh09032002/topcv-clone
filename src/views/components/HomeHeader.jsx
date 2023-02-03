import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/trangchu.css";

import logo from "./../../assets/images/topcv-logo-4.png";
import sub1 from "./../../assets/images/nav-job.png";
import sub2 from "./../../assets/images/nav-cv.png";
import sub3 from "./../../assets/images/nav-contest.png";

import { AuthContext } from "../../context/authContext";
import { NAVIGATION } from "../../services/constants";

export default function HomeHeader() {
  const authProvider = useContext(AuthContext);
  const { authState, signOut } = authProvider;

  const isLogin = () => (authState.currentUser === null ? false : true);

  return (
    <header>
      <a href={"."} className="logo">
        <img src={logo} alt="" />
      </a>
      <div id="menu" className="fas fa-bars" />
      <div className="navbar">
        <li className="job">
          <a href={"./"}>Việc làm</a>
          <ul className="sub-menu">
            <div className="right">
              <p>Tìm việc làm</p>
              <p>Việc làm phù hợp</p>
              <p>Việc làm IT</p>
              <p>Việc làm Senior</p>
            </div>
            <div className="left">
              <img src={sub1} alt="" />
            </div>
          </ul>
        </li>
        <li>
          <a className="cv" href={"./"}>
            Hồ sơ &amp; CV
          </a>
          <ul className="sub-menu">
            <div className="right">
              <p>
                <Link to={NAVIGATION.CV_TEMPLATE}>Mẫu CV</Link>
              </p>
              <p>Mẫu Cover Letter</p>
              <p>Dịch vụ tư vấn CV</p>
              <p>Hướng dẫn viết CV theo ngành nghề</p>
              <p>TopCV Profile</p>
            </div>
            <div className="left">
              <img src={sub2} alt="" />
            </div>
          </ul>
        </li>
        <li>
          <a href={"./"}>Công ty</a>
          <ul className="sub-menu2">
            <div className="right">
              <p>Danh sách Công Ty</p>
              <p>Top Công Ty</p>
            </div>
          </ul>
        </li>
        <li>
          <a className="pt" href={"./"}>
            Phát triển &amp; Sự nghiệp
          </a>
          <ul className="sub-menu">
            <div className="right">
              <p>TopCV Contest</p>
              <p>TopCV Skills Mới</p>
              <p>Trắc nghiệm tính cách MBTI</p>
              <p>Trắc nghiệm MI</p>
            </div>
            <div className="left">
              <img src={sub3} alt="" />
            </div>
          </ul>
        </li>
        <li>
          <a className="congcu" href={"./"}>
            Công cụ
          </a>
          <ul className="sub-menu1">
            <div className="right">
              <p>Tính lương GROSS - NET</p>
              <p>Tính lãi suất kép</p>
              <p>Lập kế hoạch tiết kiệm</p>
              <p>Tính Bảo hiểm thất nghiệp</p>
              <p>Tính bảo hiểm xã hội một lần</p>
              <p> Mobile App TopCV</p>
            </div>
          </ul>
        </li>

        <li className="job">
          <Link to="/danhgia">Đánh giá</Link>
        </li>

        <li className="job">
          <Link to="/goivip">Mua Gói Vip</Link>
        </li>
      </div>
      <div className="right-menu">
        {isLogin() ? (
          <Link className="register" onClick={signOut}>
            Đăng Xuất
          </Link>
        ) : (
          <Link className="sigin" to={NAVIGATION.SIGN_IN}>
            Đăng Nhập
          </Link>
        )}
        {isLogin() || (
          <Link className="register" to={NAVIGATION.SIGN_UP}>
            Đăng Ký
          </Link>
        )}
        <a href={"./"} className="search-hs">
          Đăng tuyển &amp; Tìm hồ sơ
        </a>
      </div>
    </header>
  );
}
