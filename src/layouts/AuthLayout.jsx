import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-brand">
          <Link to="/">
          <img src={logo} alt="Delicious Fruits" width="60px" />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
