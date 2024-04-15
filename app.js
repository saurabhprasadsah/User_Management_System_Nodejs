import dotenv from 'dotenv'
dotenv.config()
import express from "express"
const app = express()

const PORT = process.env.PORT

app.get("/name",(req, res) =>{
    res.send("Hello saurabh")
})



app.listen(PORT, ()=>{
    console.log(`Server listing at http://localhost:${PORT}`);
})