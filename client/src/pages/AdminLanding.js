import React, { useState, useEffect } from "react";
import darkhorse from "../images/darkhorse-logo.png";

const AdminLanding = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const blogResponse = await fetch("/blog/count");
        const blogData = await blogResponse.json();
        setBlogCount(blogData.count);

        const userResponse = await fetch("/user/count");
        const userData = await userResponse.json();
        setUserCount(userData.count);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="admin--landing">
      <img
        src={darkhorse}
        alt="Company-logo"
        width={40}
        height={32}
        className="company-logo-admin"
      />
      <p>Welcome to Admin Dashboard</p>
      <div className="counts">
        <div className="blog--count" style={{ textAlign: "center" }}>
          <p className="counter">{blogCount}</p>
          <p className="counter--name">Blogs</p>
        </div>
        <div className="blog--count" style={{ textAlign: "center" }}>
          <p className="counter">{userCount}</p>
          <p className="counter--name">Users</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
