import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/blog");
      const data = await response.json();
      // Get unique random indexes
      const uniqueRandomIndexes = [];
      while (uniqueRandomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * data.length);
        if (!uniqueRandomIndexes.includes(randomIndex)) {
          uniqueRandomIndexes.push(randomIndex);
        }
      }
      // Get blogs corresponding to unique random indexes
      const randomBlogs = uniqueRandomIndexes.map(index => data[index]);
      setBlogs(randomBlogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="explore--card">
      {blogs.map((blog) => (
        <div className="cards" key={blog._id}>
          <Link className="link--explore" to={`/blog/${blog._id}`}>
            <img className="explore--img" src={blog.url} alt="Featured Post" />
            <p className="title-explore">{blog.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Explore;
