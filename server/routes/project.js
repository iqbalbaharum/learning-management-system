

const Router = require('express').Router()
import projectController from '../controller/project'

Router.route('/')
    .get(projectController.index)
    .post(projectController.newProject)

Router.route('delete/:id')
    .get(projectController.deleteProject)

Router.route('/update')
    .post(projectController.updateProject)

module.exports = Router