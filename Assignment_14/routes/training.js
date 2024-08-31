const express = require('express');
const training = require('../controllers/trainingControllers');
const myMiddleware = require('../middleware/myMiddleware');

const router = express.Router()

router.get('/training' , myMiddleware, training)

module.exports = router

