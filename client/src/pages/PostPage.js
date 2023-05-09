import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Explore from "../components/Explore"
import Footer from "../components/Footer";
export default function PostPage() {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://darkhorsestocks.onrender.com/blog/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
    <div className="post--div">
      <p className="hashtag">#darkhorsestocks</p>
      {blogData && <div className="blog--title">{blogData.title}</div>}
      {blogData && (
        <div className="blog--date">
          {new Date(blogData.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      )}
      {blogData && (
        <div>
          <img className="blog--img" src={blogData.url} alt="Featured Post" />
        </div>
      )}
      {blogData &&
        blogData.content.map((paragraph, index) => (
          <p className="blog--paragraph" key={index}>
            {paragraph}
          </p>
        ))}
    </div>
    <h3 className="Explore--blogs">Explore More Blogs</h3>
    <Explore/>
    <Footer/>
    </>
  );
}
