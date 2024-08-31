const express = require('express')
const home = require('../controllers/homeControllers')
const myMiddleware = require('../middleware/myMiddleware')

const router = express.Router()

router.get('/' , myMiddleware ,home)

module.exports = router