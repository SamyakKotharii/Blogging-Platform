import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch)
  const navigate = useNavigate();

  const getData = useCallback(() => {
    const apiUrl = searchKey
      ? `http://localhost:4000/search/${searchKey}`
      : "http://localhost:4000/blog";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchKey]);

  useEffect(() => {
    getData();
  }, [getData]);

  const searchHandle = (e) => {
    setSearchKey(e.target.value);
  };
  const Blogp = () => {
    if (state) {
      if (blogs.length === 0) {
        return (<>
        <h1 className="blog--notfound">No blogs found</h1>
        <Footer/>
        </>)
      }
      return (
        <>
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
                      <Link to={`/blog/${blog._id}`}>
                        <a href="https://transform.tools/html-to-jsx" className="btn btn-primary">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
          <Footer />
        </>
      );
    } else {
      return navigate("/");
    }
  };
  
  // const Blogp = () => {
  //   if (state) {
  //     return (
  //       <>
  //         <div className="blog--posts">
  //           <section className="featured-post">
  //             {blogs.map((blog) => {
  //               return (
  //                 <div className="post" key={blog._id}>
  //                   <div className="post-img">
  //                     <Link to={`/blog/${blog._id}`}>
  //                       <img src={blog.url} alt="Featured Post" />
  //                     </Link>
  //                   </div>
  //                   <div className="post-content">
  //                     <Link className="link--blog" to={`/blog/${blog._id}`}>
  //                       <h3 className="post-title">{blog.title}</h3>
  //                     </Link>
  //                     <p className="post-meta">{blog.date.substr(0, 10)}</p>
  //                     <p className="post-summary">{blog.desc}</p>
  //                     <Link to={`/blog/${blog._id}`}>
  //                       <a href="https://transform.tools/html-to-jsx" className="btn btn-primary">
  //                         Read More
  //                       </a>
  //                     </Link>
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </section>
  //         </div>
  //         <Footer />
  //       </>
  //     );
  //   } else {
  //     return navigate("/");
  //   }
  // };

  return (
    <>
      <input className="search--blog" type="text" placeholder="Search Blog" onChange={searchHandle} />
      <Blogp />
    </>
  );
}
