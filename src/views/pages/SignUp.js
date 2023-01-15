import React, { useState, useContext } from "react";
// import { object, string, number, date, InferType } from "yup";

import CircularProgress from "@mui/material/CircularProgress";

import { NAVIGATION } from "../../services/constants";
import { AuthContext } from "../../context/authContext";

import "./style.css";

// const signUpFormScheme = object({
//   username: string().required(),
//   email: string().required(),
//   password: string().required(),
//   confirmPassword: string().required(),
// });

export default function SignUp() {
  // -- PROP AND DEFAULT-- //
  const authProvider = useContext(AuthContext);
  const { authState, signUpWithEmailAndPassword } = authProvider;

  // -- STATE -- //
  const [signUpFormState, setSignUpFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // -- HANDLER -- //
  const doSignUp = async (event) => {
    event.preventDefault();
    await signUpWithEmailAndPassword(
      signUpFormState.username,
      signUpFormState.email,
      signUpFormState.password
    );
  };

  // -- EFFECT -- //

  return (
    <div className="layer-login">
      <div className="container">
        <form onSubmit={doSignUp}>
          <h1>Chào mừng bạn đến với TopCV</h1>
          <h4>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </h4>
          <div className="form-control ">
            <h5>Username</h5>
            <input
              id="username"
              type="text"
              placeholder="Nhập Username"
              onChange={(e) =>
                setSignUpFormState((s) => ({ ...s, username: e.target.value }))
              }
              disabled={authState.isFetching}
            />
            <small />
            <span />
          </div>
          <div className="form-control ">
            <h5>Email</h5>
            <input
              id="email"
              type="text"
              placeholder="Nhập Emaill của bạn"
              onChange={(e) =>
                setSignUpFormState((s) => ({ ...s, email: e.target.value }))
              }
              disabled={authState.isFetching}
            />
            <small />
            <span />
          </div>
          <div className="form-control ">
            <h5>Mật khẩu</h5>
            <input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) =>
                setSignUpFormState((s) => ({ ...s, password: e.target.value }))
              }
              disabled={authState.isFetching}
            />
            <small />
            <span />
          </div>
          <div className="form-control ">
            <h5>Xác nhận mật khẩu</h5>
            <input
              id="confirm-password"
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChange={(e) =>
                setSignUpFormState((s) => ({
                  ...s,
                  confirmPassword: e.target.value,
                }))
              }
              disabled={authState.isFetching}
            />
            <small />
            <span />
          </div>
          <button
            type="submit"
            className="btn-submit"
            disabled={authState.isFetching}
          >
            {authState.isFetching ? <CircularProgress /> : "Đăng Ký"}
          </button>
          <div className="signup-link">
            Bạn đã có tài khoản? <a href={NAVIGATION.SIGN_IN}>Đăng nhập ngay</a>
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
