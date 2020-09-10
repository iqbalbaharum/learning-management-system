const Router = require('express').Router()
import journalController  from '../controller/journal'

Router.route('/')
    .get(journalController.index)
    .post(journalController.newJournal)

Router.route('/delete/:id')
    .get(journalController.deleteJournal)

module.exports = Router
