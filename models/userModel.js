import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   id:{
    type:Number
   },
   first_name:{
    type:String,
    required:true,
   },
   last_name:{
    type:String,
   },
   email:{
    type:String,
    required:true
   },
   gender:{
    type:String,
    required:true
   },
    avatar:{
        type:String,
        required:true
},
})

export default mongoose.model("User",userSchema);