import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../redux/action";

import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
import CartPreview from "components/CartPreview";
import Navbar from "components/Navbar"

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  const { user, basket } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };
  return (
    <header>           
      <div className="d-flex align-items-center">        
        <Navbar /> 
        <ul className="navbar-nav  ml-auto">
          <li className="nav-item">
            <Link to={`${user ? "/" : "/login"}`} className="nav-link headerLink">
              <div onClick={handleAuth} className="nav-link">
                <span className="spanTxt2">{user ? "Sign Out" : "Sign In"}</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="w-100">
          <div className="col-lg-12 justify-content-end">
            <Link to={`${user ? "/" : "/login"}`} className="headerLink">
              <div
                onClick={handleAuth}
                className="nav-link d-flex justify-content-end pr-0">
                <span className="spanTxt1">
                  Hello, {user ? user.email : "Guest!"}
                </span>                
              </div>
            </Link>
          </div>
          <div className="cart col-lg-12 justify-content-end">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    <td>:</td>
                    <td>
                      <strong>{cartQuantity}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                      <strong>{cartTotal}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a className="cart-icon" href="#" onClick={handleCartButton}>
              <i className="fa fa-shopping-cart fa-2x"></i>
              {cartQuantity ? (
                <span className="cart-count">{cartQuantity}</span>
              ) : (
                ""
              )}
            </a>
            <CartPreview />
          </div>
        </div>
      </div>     
    </header>
  );
};

export default Header;
