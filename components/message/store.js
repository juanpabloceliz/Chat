const db = require('mongoose')

db.Promise = global.Promise
db.connect('mongodb+srv://juanpabloceliz:juanpabloceliz@cluster0.ojduk.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('[db] Connect successfull.')

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages() {
    // return list
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
    //get
    //update
    //delete
}