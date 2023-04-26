const mongoose = require("mongoose");
const validator = require("validator");
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:[true,"Title is already present"],
        required:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    url: {
        type:String,
        required:true
    },
    content: [{
        type: String,
        required:true,
        unique:true
    }],
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
//New Collection
const Blog = new mongoose.model('Blog',blogSchema)
module.exports=Blog;