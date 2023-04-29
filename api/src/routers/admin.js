const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');

// Route for submitting a new blog post
router.post('/admin/blog-post', async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            desc: req.body.desc,
            url: req.body.url,
            content: req.body.content,
            date: req.body.date,
            category: req.body.category
        });
        await newBlog.save();
        res.status(201).send('Blog post created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});
//Get blogs
router.get("/admin/blogs", async (req, res) => {
    try {
      const blogsData = await Blog.find();
      res.send(blogsData);
    } catch (e) {
      res.send(e);
    }
  });
  router.delete("/admin/blog/:id", async (req, res) => {
    try {
      const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
      if (!deleteBlog) {
        return res.status(404).send("Blog not found");
      }
      res.send("Blog deleted successfully");
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
module.exports = router;
