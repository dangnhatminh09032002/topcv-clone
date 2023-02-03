import React from "react";

import "../../assets/styles/trangchu.css";
import btc from "../../assets/images/bct.png";

export default function HomeFooter() {
  return (
    <div className="footer">
      <div className="information">
        © 2014 - 2022
        <b>Công ty cổ phần TopCV Việt Nam</b>
        <h3>Trụ sở HN:</h3>Tầng 3, 4 tòa FS - GoldSeason số 47 Nguyễn Tuân,
        Thanh Xuân Trung, Thanh Xuân, Hà Nội
        <h3>Chi nhánh TP HCM:</h3>Tầng 12, Tòa nhà Dali, 24C Phan Đăng Lưu,
        Phường 6, Quận Bình Thạnh, TP Hồ Chí Minh
      </div>
      <div className="cerify">
        <img src={btc} alt="" />
      </div>
    </div>
  );
}
