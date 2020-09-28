const Router = require('express').Router()
import notesController  from '../controller/notes'

Router.route('/')
    .get(notesController.index)
    .post(notesController.newNotes)

Router.route('/delete/:id')
    .get(notesController.deleteNotes)

Router.route('/update')
    .post(notesController.updateNotes)

Router.route('/assign')
    .post(notesController.assignNotes)

module.exports = Router