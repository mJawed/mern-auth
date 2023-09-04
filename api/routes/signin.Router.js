const express=require('express')
const authSignIn = require('../controller/signin.controller')
const router = express.Router()


router.post('/',authSignIn)



module.exports = router