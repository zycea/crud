require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routel = require('./routes/route')


//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res,next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/calen',routel)
//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log('listen on port 5000')
})  
})
.catch((error)=>{
    console.log(error)
})

