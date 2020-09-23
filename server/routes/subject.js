const Router = require('express').Router()
import controller  from '../controller/subject'

Router.route('/')
    .get(controller.index)
    .post(controller.newSubject)

module.exports = Router
