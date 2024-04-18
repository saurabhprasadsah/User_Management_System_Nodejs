import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
import connectDB from './config/connectdb.js';

const app = express()


const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT




//cors policy will be handle frontend integration part.
app.use(cors())



//JSON
app.use(express.json())

//Database connection
connectDB(DATABASE_URL)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})