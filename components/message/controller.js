const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] There is no user or message.')
            return reject('The data are different.')
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })       
}

module.exports = {
    addMessage,
    getMessages
}