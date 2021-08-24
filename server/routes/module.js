const Router = require('express').Router()
import moduleController  from '../controller/module'

Router.route('/')
    .get(moduleController.index)
    .post(moduleController.newModule)

Router.route('/delete/:id')
    .get(moduleController.deleteModule)

module.exports = Router