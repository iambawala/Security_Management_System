const express = require("express")
const app = express()
const port = 3000

app.get("/health", (req,res)=> {
    res.send("Health, Server Running")
}) 


app.get("/health/about", (req,res)=> {
    res.send("Health About, Server Running")
}) 

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
} )  