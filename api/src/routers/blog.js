const express = require("express");
const router = new express.Router();
const Blog = require("../models/blogModel");
//Create Blog
router.post("/blog", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const createBlog = await blog.save();
    res.status(201).send(createBlog);
  } catch (e) {
    res.status(400).send(e);
  }
});
//Get all Blogs data
router.get("/blog", async (req, res) => {
  try {
    const blogsData = await Blog.find();
    res.send(blogsData);
  } catch (e) {
    res.send(e);
  }
});
//Get categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Blog.distinct("category");
    res.send(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//Get 3 Blogs by Dates
router.get("/blog/latest", async (req, res) => {
  try {
    const latestItems = await Blog.find()
      .sort({ date: -1 }) // sort by descending date
      .limit(3); // limit to the latest three items
    res.json(latestItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//Get individual blog data by ID
router.get("/blog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const blogData = await Blog.findById(_id);
    if (!blogData) {
      return res.status(404).send();
    } else {
      res.send(blogData);
    }
  } catch (e) {
    res.send(e);
  }
});
//Delete Blog data
router.delete("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deleteBlog) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
//Update Blog data
router.patch("/blog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const patchUpdate = await Blog.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(patchUpdate);
  } catch (e) {
    res.status(404).send(e);
  }
});
//Search
router.get("/search/:key", async (req, resp) => {
  let result = await Blog.find({
    $or: [
      { title: { $regex: req.params.key } },
      { desc: { $regex: req.params.key } },
      { content: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
//Filter Product
router.post("/blog-filter", async (req, res) => {
  try {
    const { checked } = req.body;
    let args = {};
    if (checked.length > 0) args.category = { $in: checked };
    const blogs = await Blog.find(args);
    res.status(200).send({ message: "Fetched", blogs });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "Error in filtering" });
  }
});

module.exports = router;
