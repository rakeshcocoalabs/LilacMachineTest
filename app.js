const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/node-boilerplate'

const cors = require('cors')

const whitelist = ['http://localhost', 'http://127.0.0.1']
// const corsOptions = {
//     methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
// }

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors)


const alienRouter = require('./routes/aliens')
const accountRouter = require('./routes/accounts')
app.use('/aliens', alienRouter);
app.use('/accounts',accountRouter);
app.listen(9000, () => {
    console.log('Server started')
})