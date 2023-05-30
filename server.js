const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workouts')
require('dotenv').config()
// creates express
const app = express()

//Middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
// get api routes
app.use('/api/workouts',workoutRoutes)

// connect to db

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to Db and Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


// listen for requests

