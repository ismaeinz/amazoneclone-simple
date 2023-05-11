import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderLogo from "../images/header-logo.png";
import SearchIcon from "../images/icons/searchIcon.png";
import ShoppingCart from "../images/icons/shopping-cart.png";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";
const Header = () => {
  const { user } = useAuth();
  const { basket } = useAuth();
  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={HeaderLogo} alt="HeaderLogo" className="header-logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src={SearchIcon} alt="search-icon" className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuth}>
            <div className="header-optionLineOne">
              Hello {user ? `${user.email} ` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "SignOut" : "Sign In"}{" "}
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Return </div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your </div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={ShoppingCart} alt="" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
