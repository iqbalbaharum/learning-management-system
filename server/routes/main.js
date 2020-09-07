const Router = require('express').Router()

import mainController  from '../controller/main'

Router.route('/')
    .get(mainController.index)

Router.route('/login')
    .get(mainController.index)

module.exports = Router