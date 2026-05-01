import express from "express"
const app = express()
const port = 3000

app.use(express.json())

import  dotenv from "dotenv"
dotenv.config()

import  connectDB from "./db/config.js"
connectDB() // Connect to MongoDB

app.get("/health", (req,res)=> {
    res.send("Health ok, Server Running")
}) 


app.get("/health/about", (req,res)=> {
    res.send("Health About, Server Running")
}) 

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
} )  