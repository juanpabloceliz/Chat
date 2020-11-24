const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const socket = require('./socket')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://juanpabloceliz:juanpabloceliz@cluster0.ojduk.mongodb.net/chat?retryWrites=true&w=majority')

app.use(cors())
app.use(bodyParser.json())
//app.use(router)

socket.connect(server)

router(app)

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

server.listen(3000, function () {
    console.log('La app esta en http://localhost:3000')
})