import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer"
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getData = (req, res) => {
    fetch("http://localhost:4000/blog")
      .then((response) => response.json())
      .then((data) => {
        // handle the data
        console.log(data);
        setBlogs(data);
      })
      .catch((error) => {
        // handle the error
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="blog--posts">
      <section className="featured-post">
        {blogs.map((blog) => {
          return (
            <div className="post">
              <div className="post-img">
                <Link to = {`/blog/${blog._id}`}>
                <img
                  src={blog.url}
                  alt="Featured Post"
                />
                </Link>
              </div>
              <div className="post-content">
              <Link to = {`/blog/${blog._id}`}>
                <h3 className="post-title">{blog.title}</h3></Link>
                <p className="post-meta">{blog.date.substr(0,10)}</p>
                <p className="post-summary">
                  {blog.desc}
                </p>
                <a href="https://transform.tools/html-to-jsx" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
    <Footer/>
    </>
  );
}
