
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
       
      </footer>
    </div >

  )
}

Footer.propTypes = {

}

export default Footer
