const express = require("express")
const app = express()
const port = 3000

app.get("/health", (req,res)=> {
    res.send("Health Checkup, Server Running")
}) 

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
} )  