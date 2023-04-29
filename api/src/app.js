const dotenv  =require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express(); 
const bodyParser = require("body-parser");
dotenv.config({path:'./.env'})
require("./db/conn")
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
const userRouter = require('./routers/auth')
app.use(bodyParser.json());
app.use(userRouter)
const blogRouter = require("./routers/blog")
app.use(blogRouter)
const adminRouter = require("./routers/admin")
app.use(adminRouter)
app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
});