const e = require('express')
const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Invalid information', 400, 'Login error.')
        })
})

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e)
        })
})

router.patch('/:id', (req, res) => {
    console.log(req.params.id)

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Intern error', 500, e)
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `User ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Intern error', 500, e)
        })
})

module.exports = router