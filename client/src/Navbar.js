import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./App";
const Navbar = () => {
  const {state,dispatch} =   useContext(UserContext);
  console.log(dispatch);
  const handleAboutUsClick = () => {
    // Scroll down to the About Us section
    const aboutUsSection = document.getElementById("about-us-section");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const RenderMenu=()=>{
    if(state){
      return(
        <>
        <li className="nav--list">
          <NavLink
            className="nav--list "
            to="/home"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav--list">
          <NavLink
            className="nav--list nav--list--op"
            to="/blogs"
            style={{ textDecoration: "none" }}
          >
            Blogs
          </NavLink>
        </li>
        <div className="nav--list drop--down">
          <button className="dropbtn">
            <NavLink
              className="nav--list nav--list--op"
              to="/Products"
              style={{ textDecoration: "none" }}
            >
              Products
            </NavLink>
          </button>
          <div className="dropdown-content">
            <a href="https://mf.darkhorsestocks.in/sign-in">Fundalysis</a>
            <a href="https://dashboard.darkhorsestocks.in/auth/login">
              Dashboard
            </a>
          </div>
        </div>
        <li className="nav--list">
          <NavLink
            className="nav--list nav--list--op"
            to="/Subscription"
            style={{ textDecoration: "none" }}
          >
            Subscription
          </NavLink>
        </li>
        <li>
        <NavLink
            className="nav--list"
            to="/home"
            style={{ textDecoration: "none" }}
            onClick={handleAboutUsClick}
          >
            About Us
          </NavLink>
        </li>
        <li className="nav--list">
        <NavLink
            className="nav--list"
            to="/logout"
            style={{ textDecoration: "none" }}
            // onClick={handleAboutUsClick}
          >
            Logout
          </NavLink>
        </li>

        </>
      )
    }else{
      return(
        <>
        <li className="nav--list">
          <NavLink
            className="nav--list "
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav--list">
          <NavLink
            className="nav--list nav--list--op"
            to="/blogs"
            style={{ textDecoration: "none" }}
          >
            Blogs
          </NavLink>
        </li>
        <div className="nav--list drop--down">
          <button className="dropbtn">
            <NavLink
              className="nav--list nav--list--op"
              to="/Products"
              style={{ textDecoration: "none" }}
            >
              Products
            </NavLink>
          </button>
          <div className="dropdown-content">
            <a href="https://mf.darkhorsestocks.in/sign-in">Fundalysis</a>
            <a href="https://dashboard.darkhorsestocks.in/auth/login">
              Dashboard
            </a>
          </div>
        </div>
        <li className="nav--list">
          <NavLink
            className="nav--list nav--list--op"
            to="/Subscription"
            style={{ textDecoration: "none" }}
          >
            Subscription
          </NavLink>
        </li>
        <li className="nav--list">
        <NavLink
            className="nav--list"
            to="/"
            style={{ textDecoration: "none" }}
            // onClick={handleAboutUsClick}
          >
            Login
          </NavLink>
          {/* <NavLink
            className="nav--list"
            to="/"
            style={{ textDecoration: "none" }}
            onClick={handleAboutUsClick}
          >
            About Us
          </NavLink> */}
        </li>
        <li className="nav--list">
        <NavLink
            className="nav--list"
            to="/signup"
            style={{ textDecoration: "none" }}
            // onClick={handleAboutUsClick}
          >
            Registration
          </NavLink>
        </li>
        </>
      )
    }
  }
  return (
    <nav className="navbar" >
      <img
        className="darkhorse--logo"
        src={require("./images/darkhorse-logo.png")}
        alt=""
        width="40px"
      />
      <p className="company--name">DARKHORSESTOCKS</p>
      <ul className="nav--items">
        <RenderMenu/>
      </ul>
      {/* <img src={require("../images/search.png")} alt="" width="25px"/> */}
    </nav>
  );
};
export default Navbar;
