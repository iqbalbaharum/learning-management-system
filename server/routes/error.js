const Router = require('express').Router()
import errorController  from '../controller/error'

Router.route('/')
    .get(errorController.index)
    
module.exports = Router