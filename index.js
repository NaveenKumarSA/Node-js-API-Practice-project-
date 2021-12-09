const express = require("express")
const mongoose = require("mongoose")
const alienRouter = require('./routes/aliens')
const usersRouter = require('./routes/users')

const url = 'mongodb://localhost/AlienDBex'

// assigning express in to the app
// app.use accepts a uri we can be able to redirect to another js file wehere we can write a logic for that particular uri 

const app = express()
mongoose.connect(url, {useNewUrlParser:true})
app.use(express.json())
app.use('/aliens', alienRouter)
app.use('/users', usersRouter)
// mongoose.connect create a connection 
// it requires a url as first argument and parser as second arg
// mongoose.connection is assigned to con var 
// on connection execution we can add a call back function 
const con = mongoose.connection
con.on('open' , ()=>{
    console.log('connected! 2')
})


// app.listen will start the server 
// we can pass port no as first arg
// we can pass a call back funtion as second arg

app.listen(9000, ()=>{
    console.log("server started! 1")
})