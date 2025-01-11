
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.routes.js";
import connectDB from "./src/db/connectDB.js";
import cors from 'cors';



const PORT = process.env.PORT || 3000;

dotenv.config();


let corsOptions = {
    origin: '*',
    credential : true,
    methods: ["GET", "HEAD","POST", "PUT", "DELETE"],
  };
  
app.use(cors());
  

app.use(cookieParser());
app.use(express.json());  //to parse the incoming request wiht json{from req.body}

app.use("/api/auth",authRoutes);


app.get('/isactive', (req, res)=>{
    res.send('Hello Developer! Your server is running')
})


server.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port${PORT} , Http://localhost:${PORT}`);
})

