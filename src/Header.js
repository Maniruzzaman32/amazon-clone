import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { reducer } from "./reducer";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(); //useStateValue = () => useContext(StateContext)
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* 1. logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* 2. search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3. three links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option__one">Hello {user?.email}</span>
            <span className="header__option__two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option__one">Returns </span>
            <span className="header__option__two"> & Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option__one">Your</span>
            <span className="header__option__two">Prime</span>
          </div>
        </Link>
      </div>
      {/* 4. basket icon with a number */}
      <Link to="/checkout" className="header__link">
        <div className="header__option__basket">
          <ShoppingBasketIcon />
          <span className="header__option__two header__basket__count">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
