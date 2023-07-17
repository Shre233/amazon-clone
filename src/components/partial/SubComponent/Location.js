import React from "react";
import "../../style/Footer.css";
import Amazon from "../../../images/amazon_logo.jpg";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
function Location() {
  return (
    <div>
      <div className="SecondContainer">
        <div className="Navigation">
          <Link to="/">
            <img className="FooterImg" src={Amazon} alt="" />
          </Link>
          <div className="Language">
            <LanguageIcon className="Icon" />
            <p>English</p>
          </div>
        </div>
      </div>
      <div className="ThirdContainer">
        <div className="Location">
          <p>Australia</p>
          <p>Brazil</p>
          <p>Canada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
        </div>
        <div className="Location2">
          <p>United Kingdom</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
