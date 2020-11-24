const socketIo = require('socket.io')
const socket = {}

function connect(server) {
    socket.io = socketIo(server)
}

module.exports = {
    connect,
    socket
}