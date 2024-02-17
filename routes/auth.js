const router = require('express').Router()
const authCtlr = require('../controllers/authController')

router
    .route('/login')
    .post(authCtlr.Login)

router
    .route('/register')
    .post(authCtlr.Register)

module.exports = router