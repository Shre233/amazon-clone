import React from "react";
import "../style/Header.css";
import logo from "../../images/amazon_logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextProvider/StateProvider";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/">
        <img className="logoBanner" src={logo} alt="#" />
      </Link>

      <div className="Address">
        <div className="demo">
          <LocationOnIcon className="LocationIcon" />
          <div className="detail">
            <span className="op1">Hello</span>
            <span className="op2">Select your address</span>
          </div>
        </div>
      </div>

      <div className="search">
        <input placeholder="Search" className="searchBar" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthentication} className="option">
            <span className="op1">
              Hello, {user ? user.displayName : "Guest"}{" "}
            </span>
            <span className="op2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to={user && "/orders"}>
          <div className="option">
            <span className="op1">Returns</span>
            <span className="op2">& Orders</span>
          </div>
        </Link>

        <div className="option">
          <span className="op1">Your</span>
          <span className="op2">Prime</span>
        </div>

        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="cartLogo">
            <ShoppingBasketIcon />
            <span className="op2 cartCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
