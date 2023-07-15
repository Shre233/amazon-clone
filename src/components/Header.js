import React from "react";
import "./Header.css";
import logo from "../images/amazon_logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../ContextProvider/StateProvider";
function Header() {
  const [{basket},dispatch]=useStateValue();


  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="#" />
      </Link>
      <div className="header_search">
        <input className="header_searchBar" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_op1">Hello User</span>
          <span className="header_op2">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_op1">Returns</span>
          <span className="header_op2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_op1">Your</span>
          <span className="header_op2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="cart_logo">
            <ShoppingBasketIcon />
            <span className="header_op2 header_cartCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
