import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Adminblogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("http://localhost:4000/admin/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/admin/blog/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } else {
        console.log("Failed to delete the blog");
      }
      setBlogs(blogs.filter((blog) => blog._id !== id));
      alert("Blog Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin--blogs">
      <div className="blog--posts">
        <section className="featured-post">
          {blogs.map((blog) => {
            return (
              <div className="post" key={blog._id}>
                <div className="post-img">
                  <Link to={`/blog/${blog._id}`}>
                    <img src={blog.url} alt="Featured Post" />
                  </Link>
                </div>
                <div className="post-content">
                  <Link className="link--blog" to={`/blog/${blog._id}`}>
                    <h3 className="post-title">{blog.title}</h3>
                  </Link>
                  <p className="post-meta">{blog.date.substr(0, 10)}</p>
                  <p className="post-summary">{blog.desc}</p>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Adminblogs;
