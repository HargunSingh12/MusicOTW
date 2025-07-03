import express from 'express'
import { configDotenv } from 'dotenv';
import { connectDb } from './lib/db.js';

configDotenv()
const app = express();

app.use(express.json())

app.get("/hello",(req,res)=>{
    res.send("Hello");
})

app.listen(3100,()=>{
    console.log("Server is running on PORT 3100");
    console.log("http://localhost:3100")
    connectDb();
})