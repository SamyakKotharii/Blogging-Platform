import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";
const Home = () => {
  let name = localStorage.getItem("adminname");
  const Nav = () => {
    if (name === "Samyak") {
      return (
        <div>
          <Sidebar />
          <Outlet />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <Outlet />
        </div>
      );
    }
  };
  return <Nav />;
};

export default Home;
