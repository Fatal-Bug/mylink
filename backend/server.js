const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

app.get("/", (req,res)=>{
    res.json("hello world!!");
})

app.listen(port, ()=>{
    console.log("listening to port:- "+port)
})