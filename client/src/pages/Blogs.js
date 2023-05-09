import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Pagination } from "antd";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("https://darkhorsestocks.onrender.com/categories");
        // console.log("data", data);
        setCategories(data);
      } catch (e) {
        console.log(e);
      }
    };

    getAllCategory();
  }, []);

  const getData = useCallback(() => {
    const apiUrl = searchKey
      ? `https://darkhorsestocks.onrender.com/search/${searchKey.toLowerCase()}`
      : "https://darkhorsestocks.onrender.com/blog";

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Sort the blogs by date in descending order
        const sortedBlogs = data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setBlogs(sortedBlogs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchKey]);
  const filterProduct = useCallback(async () => {
    try {
      const { data } = await axios.post("https://darkhorsestocks.onrender.com/blog-filter", {
        checked,
      });
      // Sort the filtered blogs by date in descending order
      const sortedBlogs = data?.blogs.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setBlogs(sortedBlogs);
      setCurrentPage(1); // Update currentPage state to 1
    } catch (e) {
      console.log(e);
    }
  }, [checked]);
  
  
  

  useEffect(() => {
    if (!checked.length) getData();
    else filterProduct();
  }, [checked, getData, filterProduct]);

  const searchHandle = (e) => {
    setSearchKey(e.target.value);
  };

  const handleFilter = (value, name) => {
    let all = [...checked];
    if (value) {
      all.push(name);
    } else {
      all = all.filter((c) => c !== name);
    }
    setChecked(all);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  };

  const Blogp = () => {
    if (state) {
      if (currentBlogs.length === 0) {
        return (
          <>
            <h1 className="blog--notfound">No blogs found</h1>
            <Footer />
          </>
        );
      }
      return (
        <>
          <div className="blog--posts">
            <section className="featured-post">
              {currentBlogs.map((blog) => {
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
                      <Link to={`/blog/${blog._id}`}>
                        <a
                          href="https://transform.tools/html-to-jsx"
                          className="btn btn-primary"
                        >
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
          <Pagination
            className="pagination"
            current={currentPage}
            pageSize={blogsPerPage}
            total={blogs.length}
            onChange={(page) => {
              paginate(page);
              window.scrollTo(0, 0);
            }}
          />
          <Footer />
        </>
      );
    } else {
      return navigate("/");
    }
  };
  
  return (
    <>
      <input
        className="search--blog"
        type="text"
        placeholder="Search Blog"
        onChange={searchHandle}
      />
      <div className="filter--categories">
        {categories?.map((c) => (
          <Checkbox className="checkbox--filter" key={c} onChange={(e) => handleFilter(e.target.checked, c)}>
            {c}
          </Checkbox>
        ))}
      </div>
      <Blogp />
      
    </>
  );
}
