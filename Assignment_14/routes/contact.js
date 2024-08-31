const express = require('express');
const {contact , postRequest} = require('../controllers/contactControllers');
const myMiddleware = require('../middleware/myMiddleware');

const router = express.Router()

router.get('/contact' , myMiddleware ,contact)
router.post('/enrollnow' , postRequest)

module.exports = router

