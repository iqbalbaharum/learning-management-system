const Router = require('express').Router()
import tagController  from '../controller/tag'

Router.route('/')
    .get(tagController.index)
    .post(tagController.newTag)

Router.route('/delete/:id')
    .get(tagController.deleteTag)

Router.route('/update')
    .post(tagController.updateTag)

Router.route('/assign')
    .post(tagController.assignTag)

module.exports = Router
