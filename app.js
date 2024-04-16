import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"


const app = express()

//cors policy will be handle frontend integration part.
app.use(cors())
const PORT = process.env.PORT



app.get("/name",(req, res) =>{
    res.send("Hello saurabh")
})



app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})