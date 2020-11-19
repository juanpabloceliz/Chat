const express = require('express')

const response = require('../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "Value unique."
    })
    response.success(req, res, 'List of messages.')
})

router.post('/', (req, res) => {
    console.log(req.query)
    if (req.query.error == 'ok') {
        response.error(req, res, 'Unspectable error', 500, 'Just a simulation.')
    } else {
        response.success(req, res, 'Created successfully.', 201)
    }
})

module.exports = router