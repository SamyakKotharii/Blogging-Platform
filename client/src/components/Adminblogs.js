import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
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
        toast.success("Failed to Delete Blog", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      toast.success("Blog Deleted Successfully!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin--blogs">
      <div className="blog--posts">
        <section className="featured-post">
          {blogs.map((blog) => (
            <div className="post" key={blog._id}>
              <div className="post-img-admin">
                <Link to={`/blog/${blog._id}`}>
                  <img src={blog.url} alt="Featured Post" />
                </Link>
              </div>
              <div className="post-content">
                <Link className="link--blog" to={`/blog/${blog._id}`}>
                  <h3 className="post-title">{blog.title}</h3>
                </Link>
                <p className="post-meta">{blog.date.substr(0, 10)}</p>
                <p className="post-summary-admin">{blog.desc}</p>
                <div className="button-admin">
                <Link to={`/blog/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
                <Link to={`/admin/update/blog/${blog._id}`}>
                <button
                  type="button"
                  className="btn btn-primary admin-btn-edit"
                >
                  Edit
                </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-primary admin-btn-edit"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Adminblogs;

