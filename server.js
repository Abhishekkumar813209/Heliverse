import app from "./app.js";
import { userData } from "./config/userData.js";
import {connectDB} from "./config/database.js";
import userModel from "./models/userModel.js";

connectDB();

app.get("/",(req,res)=>{
    res.send("Hello world");
})
//inserting mockData to database
userModel.insertMany(userData)


app.listen(process.env.PORT,()=>{
    console.log(`Server is connected at port ${process.env.PORT}`)
})