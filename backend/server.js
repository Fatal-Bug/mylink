//import dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 4000
const auth = require('./Routes/Auth')
const post=require('./Routes/exampleOfPrivateRoute')
const cookie_pareser = require("cookie-parser")
//middleware
app.use(cors())
app.use(express.json())
app.use(cookie_pareser())

//connect to DB
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true
}).then(() => { console.log("databse is connected") },
err=>{console.log(err);}
)

const connection = mongoose.connection
connection.once('open', ()=> {
     console.log("mongoDB connection established sucessfully")
})


//route middleware

app.use('/api/post',post)


app.listen(port, () => {
     console.log(`listening to port : ${port}`)
}) 