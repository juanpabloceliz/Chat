const express = require('express')
const router = express.Router()

var app = express()

app.use(router)



// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.listen(3000)
console.log('La app esta en http://localhost:3000')