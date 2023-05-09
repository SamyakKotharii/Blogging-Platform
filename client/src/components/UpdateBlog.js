import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {toast} from "react-toastify"
const UpdateBlog = () => {
  const [blog, setBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    url: "",
    date: "",
    category: "",
    content: [""],
  });
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://darkhorsestocks.onrender.com/admin/blog/${id}`)
        const data = await response.json();
        setBlog(data);
        setFormData({
          title: data.title,
          desc: data.desc,
          url: data.url,
          date: data.date,
          category: data.category,
          content: data.content,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://darkhorsestocks.onrender.com/admin/update/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        toast.success("Update Successful!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });;
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (index, value, action) => {
    const newContent = [...formData.content];
    if (action === "add") {
      newContent.splice(index + 1, 0, "");
    } else if (action === "remove") {
      newContent.splice(index, 1);
    } else {
      newContent[index] = value;
    }
    setFormData({
      ...formData,
      content: newContent,
    });
  };

  return (
    <div className="update--form">
      {isLoading && <p>Loading...</p>}
      {!isLoading && blog && (
        <div className="admin--card">
          <form className="admin--form" onSubmit={handleSubmit}>
            <h2 className="admin--add--blogs">Edit Blog</h2>
            <label className="admin--label" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <label className="admin--label update--admin" htmlFor="desc">
              Description:
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />

            <label className="admin--label update--admin" htmlFor="url">
              URL:
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />

<label className="admin--label update--admin" htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

    <label className="admin--label update--admin" htmlFor="category">
      Category:
    </label>
    <select
      id="category"
      name="category"
      className="blog-form__input"
      value={formData.category}
      onChange={handleChange}
    >
      <option value="">Select a category</option>
      <option value="Darkhorsestocks">Darkhorsestocks</option>
      <option value="Penny Stocks">Penny Stocks</option>
      <option value="Holding Company">Holding Company</option>
      <option value="Idea Exploration">Idea Exploration</option>
    </select>

    <label className="blog-form__label admin--label admin--close content--update" htmlFor="content">
      Content:
    </label>
    {formData.content.map((content, index) => (
      <div key={index} className="admin--form--input">
        <textarea
          className="blog-form__input"
          placeholder="Enter content"
          value={content}
          onChange={(e) =>
            handleContentChange(index, e.target.value, "edit")
          }
        />
        <button
          type="button"
          className="btn-primary content-change"
          onClick={() => handleContentChange(index, "", "remove")}
        >
          -
        </button>
      </div>
    ))}
    <button
      type="button"
      className="btn-primary content-change"
      onClick={() => handleContentChange(formData.content.length - 1, "", "add")}
    >
      +
    </button>
    <button className="btn-admin-submit admin--close" type="submit">
      Update
    </button>
  </form>
</div>
)};
 </div>
 );
 };
 export default UpdateBlog;