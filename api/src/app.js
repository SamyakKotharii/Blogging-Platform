const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const port = 4000;


app.use(cors())
app.use(express.json())
const blogRouter = require("./routers/blog")

app.use(blogRouter)

mongoose.connect("mongodb://127.0.0.1:27017/darkhorsestocks").then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err,"No Connection")
});

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
});