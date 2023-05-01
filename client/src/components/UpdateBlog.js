// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const UpdateBlog = () => {
//   const [blog, setBlog] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     desc: "",
//     url: "",
//     content: "",
//     date: "",
//     category: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`/admin/blog/${id}`);
//         const data = await response.json();
//         setBlog(data);
//         setFormData({
//           title: data.title,
//           desc: data.desc,
//           url: data.url,
//           content: data.content,
//           date: data.date,
//           category: data.category,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`/admin/update/blog/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);
//       setBlog(data);
//     } catch (error) {
//       console.log(error);
//       setError(error.message);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleFormSubmit}>
//           {error && <p>{error}</p>}
//           <label>
//             Title:
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleFormChange}
//             />
//           </label>
//           <label>
//             Description:
//             <textarea
//               name="desc"
//               value={formData.desc}
//               onChange={handleFormChange}
//             />
//           </label>
//           <label>
//             URL:
//             <input
//               type="text"
//               name="url"
//               value={formData.url}
//               onChange={handleFormChange}
//             />
//           </label>
//           <label>
//             Content:
//             <textarea
//               name="content"
//               value={formData.content}
//               onChange={handleFormChange}
//             />
//           </label>
//           <label>
//             Date:
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleFormChange}
//             />
//           </label>
//           <label>
//             Category:
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleFormChange}
//             />
//           </label>
//           <button type="submit">Update Blog</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UpdateBlog;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const [error, setError] = useState(null);
  const [content, setContent] = useState([""]);

  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/admin/blog/${id}`);
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
        setContent(data.content);
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
      const response = await fetch(`/admin/update/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  // Define a function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a function to handle content input changes
  const handleContentChange = (index, value) => {
    const newContent = [...content];
    newContent[index] = value;
    setFormData({
      ...formData,
      content: newContent,
    });
    setContent(newContent);
  };

  return (
    <div className="update--form">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && blog && (
        <div className="admin--card">
        <form className="admin--form" onSubmit={handleSubmit}>
          <label className="admin--label" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label className="admin--label update--admin" htmlFor="desc">Description:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />

          <label className="admin--label update--admin" htmlFor="url">URL:</label>
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

          <label className="admin--label update--admin" htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />

          <label className="admin--label update--admin" htmlFor="content">Content:</label>
          {content.map((c, index) => (
            <textarea
              key={index}
              className="content-textarea"
              value={c}
              onChange={(e) => handleContentChange(index, e.target.value)}
            />
          ))}

          <button className="btn-admin-submit update--admin" type="submit">Update</button>
        </form>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
