// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
// const Authenticate = async(req,res,next)=>{
//     try{
//         const token = req.cookies.jwtoken;
//         const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
//         const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
//         if(!rootUser){throw new Error("User not found")}
//         req.token = token;
//         req.rootUser = rootUser
//         req.userID = rootUser._id;
//         next();
//     }catch(e){
//         res.status(401).send("Unauthorized: No token Provided")
//         console.log(e)
//     }
// }
// module.exports = Authenticate
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      throw new Error("Unauthorized: No token provided");
    }
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message || "Unauthorized: No token provided");
  }
};

module.exports = authenticate;
