import React, { useEffect, useRef } from "react";
import "../style/Footer.css";
import BackToTop from "./SubComponent/BackToTop";
import Info from "./SubComponent/Info";
import Location from "./SubComponent/Location";
import Facilities from "./SubComponent/Facilities";
import Copyright from "./SubComponent/Copyright";
function Footer() {
  return (
    <div className="Footer">
      <div className="Container">
        <BackToTop />
        <Info />
        <div className="line" />
        <Location/>
        <Facilities/>
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
