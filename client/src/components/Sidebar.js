import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaNewspaper, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../App";

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
      <div className="sidebar-header">
        <h3>Dashboard</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin/blogs">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <FaNewspaper /> News
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <button className="btn-logout" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
