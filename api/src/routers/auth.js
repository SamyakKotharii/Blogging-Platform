const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../models/userModel");
const authenticate = require("../middleware/authenticate")
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/user", async (req, res) => {
  try {
    const usersData = await User.find();
    res.send(usersData);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password do not match" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });
      //Hash Password
      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ message: "User registered successfully" });
      }
    }
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      res.cookie("jwtoken",token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
      })
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {  
        res.json({ message: "User Signed In" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/blogs',authenticate,(req,res)=>{
  res.send(req.rootUser)
})
router.get('/home',authenticate,(req,res)=>{
  res.send(req.rootUser)
})
router.get('/Products',authenticate,(req,res)=>{
  res.send(req.rootUser)
})

//Logout
router.get('/logout',(req,res)=>{
  res.clearCookie('jwtoken',{path:"/"})
  res.status(200).send("User LOg Out")
})

module.exports = router;
