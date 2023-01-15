/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import { red } from "@mui/material/colors";

import { AuthContext } from "../../context/authContext";
import { NAVIGATION } from "../../services/constants";

import "./style.css";

export default function SignIn() {
  // -- PROP AND DEFAULT-- //
  const authProvider = useContext(AuthContext);
  const {
    authState,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
  } = authProvider;
  const navigate = useNavigate();

  // -- STATE -- //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErr, setFormErr] = useState({
    email: "",
    password: "",
  });

  // -- HANDLER -- //
  const doSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  const doLoginWithGoogle = async (event) => {
    await signInWithGoogle();
  };

  const doLoginWithFacebook = async (event) => {
    await signInWithFacebook();
  };

  // -- EFFECT -- //
  useEffect(() => {
    if (authState.currentUser !== null) navigate(NAVIGATION.HOME);
  }, [authState.currentUser]);

  useEffect(() => {
    setFormErr({
      email: authState.errorMessage,
      password: authState.errorMessage,
    });
  }, [authState.errorMessage]);

  return (
    <div className="layer-login">
      <div className="container">
        <form onSubmit={doSignIn}>
          <h1>Chào mừng bạn trở lại,</h1>
          <div className="form-control ">
            <h5>Email</h5>
            <input
              id="email"
              type="text"
              placeholder="Emaill"
              onChange={(e) => setEmail(e.target.value)}
              disabled={authState.isFetching}
            />
            {formErr.email !== "" && (
              <div style={{ color: red[700] }}>{formErr.email}</div>
            )}
          </div>
          <div className="form-control ">
            <h5>Mật khẩu</h5>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={authState.isFetching}
            />
            {formErr.password !== "" && (
              <div style={{ color: red[700] }}>{formErr.password}</div>
            )}
          </div>
          <p>Hoặc</p>
          <button
            type="submit"
            className="facebook"
            onClick={doLoginWithGoogle}
            disabled={authState.isFetching}
          >
            <i className="bx bxl-facebook-square" />
            Facebook
          </button>
          <button
            type="submit"
            className="google"
            onClick={doLoginWithGoogle}
            disabled={authState.isFetching}
          >
            <i className="bx bxl-google" />
            Google
          </button>
          <button
            type="submit"
            className="link"
            disabled={authState.isFetching}
          >
            <i className="bx bxl-linkedin-square" />
            Linkein
          </button>
          <br />
          <button
            type="submit"
            className="btn-submit"
            disabled={authState.isFetching}
          >
            {authState.isFetching ? <CircularProgress /> : "Login"}
          </button>
          <div className="signup-link">
            Bạn chưa có tài khoản?
            <a className="a1" href={NAVIGATION.SIGN_UP}>
              Đăng ký ngay
            </a>
            <a className="a2" href={NAVIGATION.FORGOT_PASSWORD}>
              Quên mật khẩu
            </a>
          </div>
        </form>
      </div>
      <div className="container-right">
        <i className="bx bxs-chevron-right-circle slider-next" />
        <ul className="slider-dots">
          <li className="slider-dot-item active" data-index={0} />
          <li className="slider-dot-item" data-index={1} />
          <li className="slider-dot-item" data-index={2} />
        </ul>
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-item active">
              <div className="image">
                <img src="./img/img1.png" alt="" />
                <h3 className="image-title">Bảo mật &amp; An toàn tuyệt đối</h3>
                <h4 className="image-title-dow">
                  Bạn có thể chủ động bật / tắt trạng thái tìm việc. Nếu trạng
                  thái tắt, không ai có thể xem được CV của bạn.
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="image">
                <img src="./img/img2.png" alt="" />
                <h3 className="image-title">Hỗ trợ Người tìm việc</h3>
                <h4 className="image-title-dow">
                  Nhà tuyển dụng chủ động tìm kiếm và liên hệ với bạn qua hệ
                  thống kết nối ứng viên thông minh.
                </h4>
              </div>
            </div>
            <div className="slider-item">
              <div className="image">
                <img src="./img/img3.png" alt="" />
                <h3 className="image-title">Công cụ viết CV đẹp Miễn phí</h3>
                <h4 className="image-title-dow">
                  Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác
                  nhau. Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng
                  trong vòng 5 phút.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <i className="bx bxs-chevron-left-circle slider-prev" />
      </div>
    </div>
  );
}

// <React.Fragment>
//   <form onSubmit={handleSubmit}>
//     <input id="email" type="email" placeholder="email"></input>
//     <input id="password" type="password" placeholder="password"></input>
//     <button type="submit">submit</button>
//   </form>
// </React.Fragment>
