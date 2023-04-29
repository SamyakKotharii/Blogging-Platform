import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    url: "",
    content: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/admin/blog-post", formData)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.error(err));
  // };
const handleSubmit = (e) => {
  e.preventDefault();
  const { title, desc, url, content, date, category } = formData;
  const contentArr = content.split("+").map((str) => str.trim());
  axios
    .post('/admin/blog-post', {
      title,
      desc,
      url,
      content: contentArr,
      date,
      category,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

  return (
    <div>
      <form onSubmit={handleSubmit} className="blog-form">
        <label htmlFor="title" className="blog-form__label">
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
        <label htmlFor="desc" className="blog-form__label">
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
        <label htmlFor="url" className="blog-form__label">
          URL:
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
        <label htmlFor="content" className="blog-form__label">
          Content:
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="blog-form__textarea"
        />
        <br />
        <br />
        <label htmlFor="date" className="blog-form__label">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="blog-form__input"
        />
        <br />
        <br />
        <label htmlFor="category" className="blog-form__label">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="blog-form__input"
        />
        <br />
        <br />
        <button type="submit" className="blog-form__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
