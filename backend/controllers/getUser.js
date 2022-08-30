const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.getUser= catchAsyncErrors(async (req, res, next) => {
    console.log("hii");
    const { token } = req.cookies;
    
    if (!token) {
      return next(new ErrorHander("Please Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    const trueUser = await User.findById(decodedData.id);
    res.status(200).json({
        success: true,
        trueUser
      });
  });