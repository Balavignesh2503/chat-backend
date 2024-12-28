const express= require('express')
const User = require('../models/userModel')
const { registerUser } = require('../controler/userControlles')

const router = express.Router()
router.route('/').post(registerUser)
// router.post('/login',authUser)

module.exports = router