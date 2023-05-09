import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import darkhorse from "../images/darkhorse-logo.png";
const Sidebar = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminname");
    dispatch({ type: "USER", payload: false });
    navigate("/");
  };

  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 p-3"
      style={{
        width: 220,
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <NavLink to="/adminlanding">
      <div className="logo--admin">
        <img
          src={darkhorse}
          alt="Company-logo"
          width={40}
          height={32}
          className="company-logo"
        />
        <h5 className="admin--title" style={{ fontSize: "1.1rem" }}>Darkhorsestocks</h5>
        
      </div>
      </NavLink>
      <hr style={{ height: "1px", backgroundColor: "gray", border: "none", margin: "5px 10px", width:"175px" }} />
      <ul
        className="admin-bar"
        style={{ marginBottom: "250px" }}
      >
        <li className="nav-item-admin">
          <NavLink
            to="/admin"
            activeClassName="active"
            className="nav-item nav-link text-black admin--span"
            style={{ color: "black" }}
          >
            <div className="admin--span">
              {/* <FaPlusCircle className="me-2 " /> */}
              <svg
                className="svg--admin me-2 mr-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <span className="admin--span-p" style={{ fontSize: "1.1rem" }}>
                Add Blog
              </span>
            </div>
          </NavLink>
        </li>
        <li className="nav-item-admin">
          <NavLink
            to="/admin/blogs"
            activeClassName="active"
            className="nav-item nav-link admin--span"
            style={{ color: "black" }}
          >
            <div className="admin--span">
              <svg
                className="svg--admin me-2 mr-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              <span className="admin--span-p" style={{ fontSize: "1.1rem" }}>
                Update Blog
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
      <hr style={{ height: "0.5px", backgroundColor: "gray", border: "none", marginTop:"310px", width:"175px" }} />
      <button className="btn btn--admin btn-primary btn-logout-admin" onClick={handleLogout}>
        <svg
          className="logout--button me-2 mr-15"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
        <span className="admin--span--lo">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
