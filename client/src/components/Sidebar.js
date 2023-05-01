import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  FaPlusCircle, FaSignOutAlt, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../App";
import darkhorse from "../images/darkhorse-logo.png";

const Sidebar = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("adminname");
    dispatch({ type: "USER", payload: false });
    navigate("/")
  };

  return (
    <div className="sidebar">
      <div className="admin-header">
      <div className="admin-image">
                    <img src={darkhorse} alt="Company-logo" />
                </div>
                <div className="sidebar-header">
        <h3>Darkhorsestocks</h3>
      </div>
      </div>
      
      <ul className="sidebar-menu">
        {/* <li className="admin-dash">Admin Dashboard</li> */}
      <li className="button-admin">
          <Link to="/admin">
            <FaPlusCircle /> Add Blog
          </Link>
        </li>
        <li className="button-admin">
          <Link to="/admin/blogs">
            <FaEdit /> Update Blog
          </Link>
        </li>
        
        {/* <li className="button-admin">
          <Link to="/admin/update">
            <FaUsers /> Users
          </Link>
        </li> */}
        {/* <li>
          
        </li> */}
      </ul>
      <button className="form-button btn-logout form-submit-login" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
    </div>
  );
};

export default Sidebar;
