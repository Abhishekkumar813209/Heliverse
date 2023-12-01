import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path:"./config/config.env"
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))


//Route imports
import user from "./routes/userRoute.js";
import bodyParser from "body-parser";

app.use("/api/v1",user);

export default app;