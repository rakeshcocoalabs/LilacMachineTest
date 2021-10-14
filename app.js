const express = require('express')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost:27017/node-boilerplate'

const url = 'mongodb+srv://rakesh:Alpha@beta321@cluster0.l7xhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())



const todoRouter = require('./routes/todo')

app.use('/todo', todoRouter);

app.listen(9000, () => {
    console.log('Server started')
})