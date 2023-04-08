import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=() => {
  return (
    <nav className="navbar">
      <img
        className="darkhorse--logo"
        src={require("./images/darkhorse-logo.png")}
        alt=""
        width="40px"
      />
      <p className="company--name">DARKHORSESTOCKS</p>
      <ul className="nav--items">
        <li className="nav--list"><NavLink className="nav--list " to="/" style={{ textDecoration: 'none' }}>Home</NavLink></li>
        <li className="nav--list"><NavLink className="nav--list nav--list--op" to="/blogs" style={{ textDecoration: 'none' }}>Blogs</NavLink></li>
        <div className="nav--list drop--down">
          <button className="dropbtn"><NavLink className="nav--list nav--list--op" to="/Products" style={{ textDecoration: 'none' }}>Products</NavLink></button>
          <div className="dropdown-content">
            <a href="https://mf.darkhorsestocks.in/sign-in">Fundalysis</a>
            <a href="https://dashboard.darkhorsestocks.in/auth/login">Dashboard</a>
          </div>
        </div>
        <li className="nav--list"><NavLink className="nav--list nav--list--op" to="/" style={{ textDecoration: 'none' }}>Subscription</NavLink></li>
        <li className="nav--list nav--list--op" style={{ color:'#00008B' }}>About Us</li>
      </ul>
      {/* <img src={require("../images/search.png")} alt="" width="25px"/> */}
    </nav>
  );
}
export default Navbar;