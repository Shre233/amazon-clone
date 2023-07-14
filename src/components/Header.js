import React from "react";
import "./Header.css";
import logo from "../images/amazon_logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={logo} alt="#"
      />
      <div className="header_search">
        <input className="header_searchBar" type="text" />
        <SearchIcon className="header_searchIcon"/>
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
        <div className="cart_logo">
            <ShoppingBasketIcon />
          <span className="header_op2 header_cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
