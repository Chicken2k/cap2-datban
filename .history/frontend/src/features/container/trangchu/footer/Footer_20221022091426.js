
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer(props) {

  const chuyentrang = (url) => {
    window.location.href = url;
  }
  return (
    <div id="footer">
      <footer className="page-footer font-small blue pt-4 container">
      <div className=" footer">
        <div className="row section">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h3>MIỄN PHÍ ĐẶT BÀN</h3>
            <ul>
              <li>
                <a href="#">FreeShip trong nội thành</a>
              </li>
              <li>
                <a href="#">Phương thức vận chuyển</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
              <li>
                <a href="#">Hương dẫn đặt hàng</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h3>HỖ TRỢ</h3>
            <ul>
              <li>
                <a href="#">Liên hệ</a>
              </li>
              <li>
                <a href="#">Bảo mật</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Food2k</p>
        </div>
      </div>
      </footer>
    </div >

  )
}

Footer.propTypes = {

}

export default Footer
