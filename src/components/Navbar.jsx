import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';


const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg custom_nav-container col-lg-9">
        <Link className="navbar-brand" to="/">
          <span><img src={logo} alt="Delicious Fruits" width="60px" /></span>
          <span className='ml-3'>Juicy Frooty Pulpy</span>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"> About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fruits">Fruits</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
