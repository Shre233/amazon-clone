import React from "react";
import "../style/Header.css";
import logo from "../../images/amazon_logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
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

      <div className="search">
        <input className="searchBar" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthentication} className="option">
            <span className="op1">Hello, {user ? user.email : "Guest"} </span>
            <span className="op2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="option">
          <span className="op1">Returns</span>
          <span className="op2">& Orders</span>
        </div>

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
