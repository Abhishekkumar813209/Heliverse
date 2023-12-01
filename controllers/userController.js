import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHander.js";
import User from "../models/userModel.js"


export const register = catchAsyncError(async(req,res,next)=>{
    const {id,first_name,last_name,email,gender} = req.body;
    console.log(id);
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(gender);
    const file = req.file;
    if(!email) return next(new ErrorHandler("Please enter all field",400))

    let user = await User.findOne({email})
    if(user) return next(new ErrorHandler("user Already Exists",400));

    //Upload file on cloudinary
    
    const fileUri = getDataUri(file);
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content)

    user = await User.create({
        id,
        first_name,
        last_name,
        email,
        avatar: mycloud.secure_url,
        gender
    })
    res.status(200).json({
        success:true,
        user
    })
})