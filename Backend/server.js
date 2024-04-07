import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from './db/connnectToMongoDB.js';
import cookieParser from 'cookie-parser';

import  express from 'express';
const app = express();

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 8080

//to parse the incoming requsets with JSON payloads. (from req.body)
app.use(express.json());
app.use(cookieParser());

//middleware 
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);






app.get("/", (req, res) => {
    //root route http://localhost:PORT/
    res.send("Hello,World!!")
})



app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server Running on Port http://localhost:${PORT}` )
})