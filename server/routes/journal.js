const Router = require('express').Router()
import journalController  from '../controller/journal'

Router.route('/')
    .get(journalController.index)

module.exports = Router