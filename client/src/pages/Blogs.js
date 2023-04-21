import React, { useState, useEffect, useCallback } from "react";
import {Link,useNavigate} from "react-router-dom";
import Footer from "../components/Footer"

export default function Blogs() {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([]);

  const getData = useCallback(() => {
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
  }, []);

  const callAboutPage = async()=>{
    try{
      const res = await fetch("/blogs",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      console.log(data)
      if(!res.status===200){
        const error  = new Error(res.error);
        throw error
      }
    }catch(e){
      console.log(e)
      navigate("/")
    }
  }

  useEffect(() => {
    callAboutPage();
    getData();
  }, );

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
              <Link className="link--blog" to = {`/blog/${blog._id}`}>
                <h3 className="post-title">{blog.title}</h3></Link>
                <p className="post-meta">{blog.date.substr(0,10)}</p>
                <p className="post-summary">
                  {blog.desc}
                </p>
                <Link to = {`/blog/${blog._id}`}>
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
    <Footer/>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import {Link,useNavigate} from "react-router-dom";
// import Footer from "../components/Footer"
// export default function Blogs() {
//   const navigate = useNavigate()
//   const [blogs, setBlogs] = useState([]);
//   const getData = (req, res) => {
//     fetch("http://localhost:4000/blog")
//       .then((response) => response.json())
//       .then((data) => {
//         // handle the data
//         console.log(data);
//         setBlogs(data);
//       })
//       .catch((error) => {
//         // handle the error
//         console.error(error);
//       });
//   };
//   const callAboutPage=async()=>{
//     try{
//       const res = await fetch("/blogs",{
//         method:"GET",
//         header:{
//           Accept:"application/json",
//           "Content-type":"application/json"
//         },
//         credentials:"include"
//       });
//       const data = await res.json();
//       if(res.status!==200){
//         const error  = new Error(res.error);
//         throw error
//       }
//     }catch(e){
//       console.log(e)
//       navigate("/login")
//     }
//   }

//   useEffect(() => {
//     callAboutPage();
//     getData();
//   }, [callAboutPage]);

//   return (
//     <>
//     <div className="blog--posts">
//       <section className="featured-post">
//         {blogs.map((blog) => {
//           return (
//             <div className="post">
//               <div className="post-img">
//                 <Link to = {`/blog/${blog._id}`}>
//                 <img
//                   src={blog.url}
//                   alt="Featured Post"
//                 />
//                 </Link>
//               </div>
//               <div className="post-content">
//               <Link className="link--blog" to = {`/blog/${blog._id}`}>
//                 <h3 className="post-title">{blog.title}</h3></Link>
//                 <p className="post-meta">{blog.date.substr(0,10)}</p>
//                 <p className="post-summary">
//                   {blog.desc}
//                 </p>
//                 <a href="https://transform.tools/html-to-jsx" className="btn btn-primary">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//     <Footer/>
//     </>
//   );
// }
