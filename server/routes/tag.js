const Router = require('express').Router()
import tagController  from '../controller/tag'

Router.route('/')
    .get(tagController.index)

module.exports = Router
