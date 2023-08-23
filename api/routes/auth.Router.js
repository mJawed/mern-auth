const express = require('express')
const authSignUp =require('../controller/auth.controller.js')


const router = express.Router();

router.post('/',authSignUp)


module.exports = router 