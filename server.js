const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = require('./network/routes')

db('mongodb+srv://juanpabloceliz:juanpabloceliz@cluster0.ojduk.mongodb.net/chat?retryWrites=true&w=majority')

var app = express()

app.use(bodyParser.json())
//app.use(router)

router(app)

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.listen(3000)
console.log('La app esta en http://localhost:3000')