const Router = require('express').Router()
import authController  from '../controller/auth'

Router.route('/login')
    .get(authController.loginPage)
    .post(authController.login)

Router.route('/logout')
    .get(authController.logout)
    
module.exports = Router