import React from "react";
import "../style/Header.css";
import logo from "../../images/amazon_logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextProvider/StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="#" />
      </Link>
      <div className="search">
        <input className="searchBar" type="text" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="nav">
        <Link to="/login">
          <div className="option">
            <span className="op1">Hello User</span>
            <span className="op2">Sign in</span>
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
        <Link to="/checkout">
          <div className="cartLogo">
            <ShoppingBasketIcon />
            <span className="op2 cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
