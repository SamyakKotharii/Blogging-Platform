import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    url: "",
    content: [""],
    date: "",
    category: "",
  });

  const handleChange = (e, index) => {
    if (index !== undefined) {
      const newContent = [...formData.content];
      newContent[index] = e.target.value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        content: newContent,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const navigate = useNavigate();
  const addContentField = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: [...prevFormData.content, ""],
    }));
  };

  const removeContentField = (index) => {
    const newContent = [...formData.content];
    newContent.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: newContent,
    }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const { title, desc, url, content, date, category } = formData;
    const contentArr = content
      .filter((str) => str !== "")
      .map((str) => str.trim());
    axios
      .post("https://darkhorsestocks.onrender.com/admin/blog-post", {
        title,
        desc,
        url,
        content: contentArr,
        date,
        category,
      })
      .then((res) => {
        toast.success("Blog Added Successfully!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/adminlanding")
      })
      .catch((err) => {
        toast.error("Error - Add Blog again! ", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="admin--card--add">
      <form className="admin--form" onSubmit={handleSubmit}>
        <h2 className="admin--add--blogs">Add Blog</h2>
        <label htmlFor="title" className="blog-form__label admin--label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="blog-form__input"
        />
        <br />
        <br />
        <label
          htmlFor="desc"
          className="blog-form__label admin--label admin--close"
        >
          Description:
        </label>
        <textarea
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="blog-form__textarea"
        />
        <br />
        <br />
        <label
          htmlFor="url"
          className="blog-form__label admin--label admin--close"
        >
          Image URL:
        </label>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="blog-form__input"
        />
        <br />
        <br />
        <label
          htmlFor="content"
          className="blog-form__label admin--label admin--close"
        >
          Content:
        </label>
        {formData.content.map((item, index) => (
          <div className="admin--form--input" key={index}>
            <input
              type="text"
              name={`content${index}`}
              value={item}
              onChange={(e) => handleChange(e, index)}
              className="blog-form__input"
            />
            <button
              className="btn-primary content-change"
              type="button"
              onClick={() => removeContentField(index)}
            >
              -
            </button>
          </div>
        ))}
        <button
          className="btn-primary content-change"
          type="button"
          onClick={addContentField}
        >
          +
        </button>
        <br />
        <br />
        <label
          htmlFor="date"
          className="blog-form__label admin--label admin--close"
        >
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="blog-form__input blog--date--input"
        />
        <br />
        <br />
        {/* <label htmlFor="category" className="blog-form__label admin--label admin--close">
           Category:
         </label>
         <input
           type="text"
           id="category"
           name="category"
           value={formData.category}
           onChange={handleChange}
         className="blog-form__input"
         /> */}
        <label
          className="admin--label update--admin category-form"
          htmlFor="category"
        >
          Category:
        </label>
        <select
          id="category"
          className="blog-form__input category--add--form"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="Darkhorsestocks">Darkhorsestocks</option>
          <option value="Penny Stocks">Penny Stocks</option>
          <option value="Holding Company">Holding Company</option>
          <option value="Idea Exploration">Idea Exploration</option>
        </select>
        <br />
        <br />
        <button type="submit" className="btn-admin-submit admin--close">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Admin;
