import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import path from "path"
import connectToMongoDB from './db/connnectToMongoDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from "./socket/socket.js";
import express from "express";




import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 8080

const __dirname = path.resolve()


//to parse the incoming requsets with JSON payloads. (from req.body)
app.use(express.json());
app.use(cookieParser());

//middleware 
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname,"Frontend","dist","index.html"))
})






// app.get("/", (req, res) => {
//     //root route http://localhost:PORT/
//     res.send("Hello,World!!")
// })



server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server Running on Port http://localhost:${PORT}` )
})